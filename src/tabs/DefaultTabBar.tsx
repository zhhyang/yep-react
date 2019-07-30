import * as React from 'react';
import classNames from 'classnames';
import noop from '../_utils/noop';
import Gesture from '../gesture';
import {getPxStyle, getTransformPropValue, setPxStyle} from '../_utils/styleUtil';

export type Tab = {
  title: string;
};
export type underlineProps = {
  style: React.CSSProperties;
  className: string;
};
export interface DefaultTabBarProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  className?: string;
  activeTab: number;
  onTabClick?: (tab: any, index: number) => void;
  goToTab?: (index: number) => void;
  tabBarPosition?: 'top' | 'bottom' | 'left' | 'right';
  page?: number;
  tabs: Tab[];
  renderTab: (t: Tab) => React.ReactNode;
  tabBarTextStyle?: React.CSSProperties;
  tabBarActiveTextColor?: string;
  tabBarInactiveTextColor?: string;
  tabBarBackgroundColor?: string;
  tabBarUnderlineStyle: React.CSSProperties;
  renderUnderline: (underlineProps: underlineProps) => React.ReactNode;
  animated: boolean;
}
export interface State {
  transform?: string;
  isMoving?: boolean;
  showPrev?: boolean;
  showNext?: boolean;
}

export default class DefaultTabBar extends React.PureComponent<DefaultTabBarProps, State> {
  layout: HTMLDivElement;

  static defaultProps = {
    prefixCls: 'Yep-tabs-default-bar',
    onTabClick: noop,
    activeTab: 0,
    page: 5,
    animated: true,
  };

  constructor(props: DefaultTabBarProps) {
    super(props);
    this.state = {
      transform: '',
      isMoving: false,
      showPrev: false,
      showNext: false,
      ...this.getTransformByIndex(props),
    };
    this.renderTab = this.renderTab.bind(this);
    this.isTabBarVertical = this.isTabBarVertical.bind(this);
    this.getTabSize = this.getTabSize.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps(nextProps: DefaultTabBarProps) {
    if (
      this.props.activeTab !== nextProps.activeTab ||
      this.props.tabs !== nextProps.tabs ||
      this.props.tabs.length !== nextProps.tabs.length
    ) {
      this.setState({
        ...this.getTransformByIndex(nextProps),
      });
    }
  }

  onPan = (() => {
    let lastOffset: number | string = 0;
    let finalOffset = 0;

    const getLastOffset = (isVertical = this.isTabBarVertical()) => {
      let offset = +`${lastOffset}`.replace('%', '');
      if (`${lastOffset}`.indexOf('%') >= 0) {
        offset /= 100;
        offset *= isVertical ? this.layout.clientHeight : this.layout.clientWidth;
      }
      return offset;
    };

    return {
      onPanStart: () => {
        this.setState({isMoving: true});
      },

      onPanMove: (status: any) => {
        if (!status.moveStatus || !this.layout) return;
        const isVertical = this.isTabBarVertical();
        let offset = getLastOffset() + (isVertical ? status.moveStatus.y : status.moveStatus.x);
        const canScrollOffset = isVertical
          ? -this.layout.scrollHeight + this.layout.clientHeight
          : -this.layout.scrollWidth + this.layout.clientWidth;
        offset = Math.min(offset, 0);
        offset = Math.max(offset, canScrollOffset);
        setPxStyle(this.layout, offset, 'px', isVertical);
        finalOffset = offset;

        this.setState({
          showPrev: -offset > 0,
          showNext: offset > canScrollOffset,
        });
      },

      onPanEnd: () => {
        const isVertical = this.isTabBarVertical();
        lastOffset = finalOffset;
        this.setState({
          isMoving: false,
          transform: getPxStyle(finalOffset, 'px', isVertical),
        });
      },

      setCurrentOffset: (offset: number | string) => (lastOffset = offset),
    };
  })();

  isTabBarVertical(position = this.props.tabBarPosition) {
    return position === 'left' || position === 'right';
  }

  getTransformByIndex = (props: DefaultTabBarProps) => {
    const {activeTab, tabs, page = 0} = props;
    const isVertical = this.isTabBarVertical();

    const size = this.getTabSize(page, tabs.length);
    const center = page / 2;
    const pos = Math.min(activeTab, tabs.length - center - 0.5);
    const skipSize = Math.min(-(pos - center + 0.5) * size, 0);
    this.onPan.setCurrentOffset(`${skipSize}%`);
    return {
      transform: getPxStyle(skipSize, '%', isVertical),
      showPrev: activeTab > center - 0.5 && tabs.length > page,
      showNext: activeTab < tabs.length - center - 0.5 && tabs.length > page,
    };
  };

  getTabSize(page: number, tabLength: number) {
    return 100 / Math.min(page, tabLength);
  }

  onClick = (index: number) => {
    const {goToTab, onTabClick, tabs} = this.props;
    onTabClick && onTabClick(tabs[index], index);
    goToTab && goToTab(index);
  };

  renderTab = (t: Tab, i: number, size: number, isTabBarVertical: boolean) => {
    const {
      prefixCls,
      renderTab,
      activeTab,
      tabBarTextStyle,
      tabBarActiveTextColor,
      tabBarInactiveTextColor,
    } = this.props;

    const textStyle = {...tabBarTextStyle} as React.CSSProperties;
    let cls = `${prefixCls}-tab`;
    if (activeTab === i) {
      cls += ` ${cls}-active`;
      if (tabBarActiveTextColor) {
        textStyle.color = tabBarActiveTextColor;
      }
    } else if (tabBarInactiveTextColor) {
      textStyle.color = tabBarInactiveTextColor;
    }

    return (
      <div
        key={`t_${i}`}
        style={{
          ...textStyle,
          ...(isTabBarVertical ? {height: `${size}%`} : {width: `${size}%`}),
        }}
        className={cls}
        onClick={() => this.onClick(i)}
      >
        {renderTab ? renderTab(t) : t.title}
      </div>
    );
  };

  render() {
    const {
      prefixCls,
      animated,
      tabs = [],
      page = 0,
      activeTab = 0,
      tabBarBackgroundColor,
      tabBarUnderlineStyle,
      tabBarPosition,
      renderUnderline,
    } = this.props;
    const {isMoving, transform, showNext, showPrev} = this.state;
    const cls = classNames(prefixCls, `${prefixCls}-${tabBarPosition}`, {
      [` ${prefixCls}-animated`]: animated && !isMoving,
    });
    const isTabBarVertical = this.isTabBarVertical();

    const needScroll = tabs.length > page;
    const size = this.getTabSize(page, tabs.length);

    const Tabs = tabs.map((t, i) => {
      return this.renderTab(t, i, size, isTabBarVertical);
    });

    const style = {
      backgroundColor: tabBarBackgroundColor || '',
    };

    const transformStyle = needScroll
      ? {
          ...getTransformPropValue(transform),
        }
      : {};

    const {setCurrentOffset, ...onPan} = this.onPan;

    const underlineProps = {
      style: {
        ...(isTabBarVertical ? {height: `${size}%`} : {width: `${size}%`}),
        ...(isTabBarVertical ? {top: `${size * activeTab}%`} : {left: `${size * activeTab}%`}),
        ...tabBarUnderlineStyle,
      },
      className: `${prefixCls}-underline`,
    };

    return (
      <div className={cls} style={style}>
        {showPrev && <div className={`${prefixCls}-prevpage`} />}
        <Gesture {...onPan} direction={isTabBarVertical ? 'vertical' : 'horizontal'}>
          <div
            className={`${prefixCls}-content`}
            ref={div => (this.layout = div as HTMLDivElement)}
            style={transformStyle}
          >
            {Tabs}
            {renderUnderline ? (
              renderUnderline(underlineProps)
            ) : (
              <div {...underlineProps}>
                <div className={`${prefixCls}-underline-bar`} />
              </div>
            )}
          </div>
        </Gesture>
        {showNext && <div className={`${prefixCls}-nextpage`} />}
      </div>
    );
  }
}
