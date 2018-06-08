import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '../_utils/noop';
import Hammer from '../hammer';
import {getTransformPropValue} from '../_utils/styleUtil';

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
  };

  constructor(props) {
    super(props);
    this.renderTabBar = this.renderTabBar.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.isTabVertical = this.isTabVertical.bind(this);
    this.getTabIndex = this.getTabIndex.bind(this);
    this.getContentPosByIndex = this.getContentPosByIndex.bind(this);
    this.createContentLayoutRef = this.createContentLayoutRef.bind(this);
    this.state = {
      isMoving: false,
      currentTab: this.getTabIndex(props),
      contentPos: this.getContentPosByIndex(this.getTabIndex(props), this.isTabVertical(props.tabDirection)),
    };
  }

  getTabIndex(props) {
    const {page, initialPage} = props;
    const param = (page !== undefined ? page : initialPage) || 0;

    const index = param || 0;

    return index < 0 ? 0 : index;
  }

  getContentPosByIndex(index, isVertical) {
    const value = `${-index * 100}%`;
    //this.onPan.setCurrentOffset(value);

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

  renderTabBar() {
    return <div>tabbar</div>;
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
          console.log(child);
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
    const content = [
      <div key="tabBar">{this.renderTabBar()}</div>,
      <Hammer key="$content">{this.renderContent()}</Hammer>,
    ];
    return (
      <div className={cls} style={style}>
        {tabBarPosition === 'top' || tabBarPosition === 'left' ? content : content.reverse()}
      </div>
    );
  }
}
