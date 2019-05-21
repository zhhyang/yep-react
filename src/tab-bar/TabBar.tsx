import * as React from 'react';
import classNames from 'classnames';
import Tab from './Tab';
export interface TabBarProps  {
  prefixCls?: string;
  style?:React.CSSProperties;
  className?:string;
  barTintColor?: string;
  hidden?: boolean;
};
class TabBar extends React.Component<TabBarProps> {
  static defaultProps = {
    prefixCls: 'Yep-tab-bar',
    barTintColor: 'white',
    hidden: false,
  };
  static Tab = Tab;
  render() {
    let {prefixCls, className, style, barTintColor, hidden, children} = this.props;
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}-hidden`]: hidden,
    });
    const tabBarStyle = {...style, ...{backgroundColor: barTintColor}};
    return (
      <div className={cls} style={tabBarStyle}>
        {children}
      </div>
    );
  }
};





export default TabBar;
