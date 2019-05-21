import * as React from 'react';
import classNames from 'classnames';
import noop from '../_utils/noop';
export interface TabBarProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  activeTab: number;
  renderTab: (t: any) => React.ReactNode;
  goToTab?: (index: number) => void;
  onTabClick?: (tab: any, index: number) => void;
  tabs: any[];
  tabBarTextStyle?: React.CSSProperties;
  tabBarActiveTextColor?: string;
  tabBarInactiveTextColor?: string;
}
export default class TabBar extends React.PureComponent<TabBarProps> {

  static defaultProps = {
    prefixCls: 'Yep-area-picker-tabs-bar',
    onTabClick: noop,
    activeTab: 0,
    page: 5,
    tabBarPosition: 'top',
  };

  constructor(props:TabBarProps) {
    super(props);
    this.state = {
      transform: '',
      isMoving: false,
      showPrev: false,
      showNext: false,
    };
    this.renderTab = this.renderTab.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick = (index:number) => {
    const {goToTab, onTabClick, tabs} = this.props;
    onTabClick && onTabClick(tabs[index], index);
    goToTab && goToTab(index);
  };

  renderTab = (t:any, i:number, ) => {
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
        }}
        className={cls}
        onClick={() => this.onClick(i)}
      >
        {renderTab ? renderTab(t) : t.title}
      </div>
    );
  };

  render() {
    const {prefixCls, tabs = []} = this.props;
    const cls = classNames(prefixCls, `${prefixCls}-top`);

    const Tabs = tabs.map((t, i) => {
      return this.renderTab(t, i,);
    });

    return (
      <div className={cls}>
        <div className={`${prefixCls}-content`}>{Tabs}</div>
      </div>
    );
  }
}
