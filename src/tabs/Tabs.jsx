import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '../_utils/noop';
import Gesture from '../gesture';
import {GestureStatus} from '../gesture/type';
import {getTransformPropValue, setPxStyle, setTransform} from '../_utils/styleUtil';
import DefaultTabBar from './DefaultTabBar';

const getPanDirection = (direction: number | undefined) => {
  switch (direction) {
    case 2:
    case 4:
      return 'horizontal';
    case 8:
    case 16:
      return 'vertical';
    default:
      return 'none';
  }
};
export default class Tabs extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    defaultIndex: PropTypes.number,
    children: PropTypes.node.isRequired,
    lazy: PropTypes.bool,
    onChange: PropTypes.func,
    tabBarPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
    animated: PropTypes.bool,
    swipeable: PropTypes.bool,
    usePaged: PropTypes.bool,
    renderTabBar: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    onTabClick: PropTypes.func,
    tabBarActiveTextColor: PropTypes.string,
    tabBarBackgroundColor: PropTypes.string,
    tabBarInactiveTextColor: PropTypes.string,
    tabBarTextStyle: PropTypes.object,
    tabBarUnderlineStyle: PropTypes.object,
    renderTab: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'Yep-tabs',
    style: {},
    defaultIndex: 0,
    className: '',
    lazy: true,
    onChange: noop,
    tabBarPosition: 'top',
    tabDirection: 'horizontal',
    animated: true,
    swipeable: true,
    usePaged: true,
    onTabClick: noop,
  };

  constructor(props) {
    super(props);
    this.renderTabBar = this.renderTabBar.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.isTabVertical = this.isTabVertical.bind(this);
    this.getTabIndex = this.getTabIndex.bind(this);
    this.getContentPosByIndex = this.getContentPosByIndex.bind(this);
    this.createContentLayoutRef = this.createContentLayoutRef.bind(this);
    this.onSwipe = this.onSwipe.bind(this);
    this.goToTab = this.goToTab.bind(this);
    this.tabClickGoToTab = this.tabClickGoToTab.bind(this);
    this.getOffsetIndex = this.getOffsetIndex.bind(this);
    this.state = {
      isMoving: false,
      currentTab: this.getTabIndex(props),
      contentPos: this.getContentPosByIndex(this.getTabIndex(props), this.isTabVertical(props.tabDirection)),
    };
  }

  componentDidMount() {
    this.prevCurrentTab = this.state.currentTab;
  }

  componentDidUpdate() {
    this.prevCurrentTab = this.state.currentTab;
  }

  getTabIndex(props) {
    const {page, initialPage} = props;
    const param = (page !== undefined ? page : initialPage) || 0;

    const index = param || 0;

    return index < 0 ? 0 : index;
  }

  getContentPosByIndex(index, isVertical) {
    const value = `${-index * 100}%`;
    this.onPan.setCurrentOffset(value);
    const translate = isVertical ? `0px, ${value}` : `${value}, 0px`;
    // fix: content overlay TabBar on iOS 10. ( 0px -> 1px )
    return `translate3d(${translate}, 1px)`;
  }

  isTabVertical(direction = this.props.tabDirection) {
    return direction === 'vertical';
  }

  createContentLayoutRef(el) {
    this.layout = el;
  }

  tabClickGoToTab(index) {
    this.goToTab(index, false, true);
  }

  goToTab(index, force = false, usePaged = this.props.usePaged) {
    const {tabDirection} = this.props;
    let newState = {};
    if (usePaged) {
      newState = {
        contentPos: this.getContentPosByIndex(index, this.isTabVertical(tabDirection)),
      };
    }
    if (!force && this.nextCurrentTab === index) {
      return false;
    }
    this.nextCurrentTab = index;
    const {children, onChange} = this.props;
    if (index >= 0 && index < children.length) {
      if (!force) {
        onChange && onChange(index);
        if (this.props.page !== undefined) {
          return false;
        }
      }

      this.setState({
        currentTab: index,
        ...newState,
      });
    }
    return true;
  }

  onSwipe(e) {
    const {tabBarPosition, swipeable, usePaged} = this.props;
    if (!swipeable || !usePaged || this.isTabVertical()) return;
    switch (tabBarPosition) {
      case 'top':
      case 'bottom':
        switch (e.direction) {
          case 2:
            if (!this.isTabVertical()) {
              this.goToTab(this.prevCurrentTab + 1);
            }
          case 8:
            if (this.isTabVertical()) {
              this.goToTab(this.prevCurrentTab + 1);
            }
            break;
          case 4:
            if (!this.isTabVertical()) {
              this.goToTab(this.prevCurrentTab - 1);
            }
          case 16:
            if (this.isTabVertical()) {
              this.goToTab(this.prevCurrentTab - 1);
            }
            break;
        }
        break;
    }
  }
  onPan = (() => {
    let lastOffset: number | string = 0;
    let finalOffset = 0;
    let panDirection: string;

    const getLastOffset = (isVertical = this.isTabVertical()) => {
      let offset = +`${lastOffset}`.replace('%', '');
      if (`${lastOffset}`.indexOf('%') >= 0) {
        offset /= 100;
        offset *= isVertical ? this.layout.clientHeight : this.layout.clientWidth;
      }
      return offset;
    };

    return {
      onPanStart: (status: GestureStatus) => {
        if (!this.props.swipeable || !this.props.animated) return;
        panDirection = getPanDirection(status.direction);
        this.setState({
          isMoving: true,
        });
      },

      onPanMove: (status: GestureStatus) => {
        const {swipeable, animated} = this.props;
        if (!status.moveStatus || !this.layout || !swipeable || !animated) return;
        const isVertical = this.isTabVertical();
        let offset = getLastOffset();
        if (isVertical) {
          offset += panDirection === 'horizontal' ? 0 : status.moveStatus.y;
        } else {
          offset += panDirection === 'vertical' ? 0 : status.moveStatus.x;
        }
        const canScrollOffset = isVertical
          ? -this.layout.scrollHeight + this.layout.clientHeight
          : -this.layout.scrollWidth + this.layout.clientWidth;
        offset = Math.min(offset, 0);
        offset = Math.max(offset, canScrollOffset);
        setPxStyle(this.layout, offset, 'px', isVertical);
        finalOffset = offset;
      },

      onPanEnd: () => {
        if (!this.props.swipeable || !this.props.animated) return;
        lastOffset = finalOffset;
        const isVertical = this.isTabVertical();
        const offsetIndex = this.getOffsetIndex(
          finalOffset,
          isVertical ? this.layout.clientHeight : this.layout.clientWidth
        );
        this.setState({
          isMoving: false,
        });
        if (offsetIndex === this.state.currentTab) {
          if (this.props.usePaged) {
            setTransform(this.layout.style, this.getContentPosByIndex(offsetIndex, this.isTabVertical()));
          }
        } else {
          this.goToTab(offsetIndex);
        }
      },

      setCurrentOffset: (offset: number | string) => (lastOffset = offset),
    };
  })();

  getOffsetIndex = (current, width, threshold = this.props.distanceToChangeTab || 0) => {
    const ratio = Math.abs(current / width);
    const direction = ratio > this.state.currentTab ? '<' : '>';
    const index = Math.floor(ratio);
    switch (direction) {
      case '<':
        return ratio - index > threshold ? index + 1 : index;
      case '>':
        return 1 - ratio + index > threshold ? index : index + 1;
      default:
        return Math.round(ratio);
    }
  };

  getTabBarBaseProps() {
    const {currentTab} = this.state;

    const {
      animated,
      onTabClick,
      tabBarActiveTextColor,
      tabBarBackgroundColor,
      tabBarInactiveTextColor,
      tabBarPosition,
      tabBarTextStyle,
      tabBarUnderlineStyle,
      children,
    } = this.props;

    const tabs = React.Children.map(children, (child, index) => {
      return {
        title: child.props.tab,
        key: index,
      };
    });
    return {
      activeTab: currentTab,
      animated: !!animated,
      goToTab: this.tabClickGoToTab,
      onTabClick,
      tabBarActiveTextColor,
      tabBarBackgroundColor,
      tabBarInactiveTextColor,
      tabBarPosition,
      tabBarTextStyle,
      tabBarUnderlineStyle,
      tabs,
    };
  }

  renderTabBar(tabBarProps) {
    const {renderTabBar} = this.props;
    if (renderTabBar === false) {
      return null;
    } else if (renderTabBar) {
      // return React.cloneElement(this.props.renderTabBar(props), props);
      return renderTabBar(tabBarProps);
    } else {
      return <DefaultTabBar {...tabBarProps} />;
    }
  }

  renderContent() {
    const {prefixCls, animated, children} = this.props;
    const {isMoving, currentTab, contentPos} = this.state;
    const isTabVertical = this.isTabVertical();
    const cls = classNames({
      [`${prefixCls}-content-wrap`]: true,
      [`${prefixCls}-content-wrap-animated`]: animated && !isMoving,
    });
    const contentStyle = animated
      ? getTransformPropValue(contentPos)
      : {
          position: 'relative',
          ...(this.isTabVertical() ? {top: `${-currentTab * 100}%`} : {left: `${-currentTab * 100}%`}),
        };
    return (
      <div className={cls} style={contentStyle} ref={this.createContentLayoutRef}>
        {React.Children.map(children, (child, index) => {
          const panelCls = classNames({
            [`${prefixCls}-pane-wrap`]: true,
            [`${prefixCls}-pane-wrap-${currentTab === index ? '' : 'in'}active`]: true,
          });
          return React.cloneElement(
            child,
            {
              ...child.props,
              className: panelCls,
              active: currentTab === index,
              fixX: isTabVertical,
              fixY: !isTabVertical,
            },
            child.props.children
          );
        })}
      </div>
    );
  }

  render() {
    const {prefixCls, className, style, tabDirection, tabBarPosition} = this.props;
    const cls = classNames(prefixCls, className, `${prefixCls}-${tabDirection}`, `${prefixCls}-${tabBarPosition}`);
    const tabBarProps = {...this.getTabBarBaseProps()};
    const content = [
      <div key="tabBar" className={`${prefixCls}-tab-bar-wrap`}>
        {this.renderTabBar(tabBarProps)}
      </div>,
      <Gesture key="$content" onSwipe={this.onSwipe} {...this.onPan}>
        {this.renderContent()}
      </Gesture>,
    ];
    return (
      <div className={cls} style={style}>
        {tabBarPosition === 'top' || tabBarPosition === 'left' ? content : content.reverse()}
      </div>
    );
  }
}
