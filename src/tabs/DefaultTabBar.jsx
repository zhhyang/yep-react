import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '../_utils/noop';

export default class DefaultTabBar extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    activeTab: PropTypes.number,
    onTabClick: PropTypes.func,
    tabBarPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    page: PropTypes.number,
  };

  static defaultProps = {
    prefixCls: 'Yep-tabs-default-bar',
    onTabClick: noop,
    activeTab: 0,
    page: 5,
  };

  constructor() {
    super();
    this.state = {
      transform: '',
      isMoving: false,
      showPrev: false,
      showNext: false,
    };
    this.renderTab = this.renderTab.bind(this);
    this.isTabBarVertical = this.isTabBarVertical.bind(this);
    this.getTabSize = this.getTabSize.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  isTabBarVertical(position = this.props.tabBarPosition) {
    return position === 'left' || position === 'right';
  }

  getTabSize(page, tabLength) {
    return 100 / Math.min(page, tabLength);
  }

  onClick = index => {
    const {goToTab, onTabClick, tabs} = this.props;
    onTabClick && onTabClick(tabs[index], index);
    goToTab && goToTab(index);
  };

  renderTab = (t, i, size, isTabBarVertical) => {
    const {
      prefixCls,
      renderTab,
      activeTab,
      tabBarTextStyle,
      tabBarActiveTextColor,
      tabBarInactiveTextColor,
    } = this.props;

    const textStyle = {...tabBarTextStyle};
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

    const underlineProps = {
      style: {
        ...(isTabBarVertical ? {height: `${size}%`} : {width: `${size}%`}),
        ...(isTabBarVertical ? {top: `${size * activeTab}%`} : {left: `${size * activeTab}%`}),
        ...tabBarUnderlineStyle,
      },
      className: `${prefixCls}-underline`,
    };

    return (
      <div className={cls}>
        <div className={`${prefixCls}-content`}>
          {Tabs}
          {renderUnderline ? renderUnderline(underlineProps) : <div {...underlineProps} />}
        </div>
      </div>
    );
  }
}
