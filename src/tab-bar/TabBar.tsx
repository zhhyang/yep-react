import * as React from 'react';

import classNames from 'classnames';

const TabBar:React.FunctionComponent<TabBarProps> = ({prefixCls, className, style, barTintColor, hidden, children}) => {
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}-hidden`]: hidden,
  });
  const tabBarStyle = {...style, ...{backgroundColor: barTintColor}};
  return (
    <div className={cls} style={tabBarStyle}>
      {children}
    </div>
  );
};

export interface TabBarProps  {
  prefixCls?: string;
  style?:React.CSSProperties;
  className?:string;
  barTintColor?: string;
  hidden?: boolean;
};

TabBar.defaultProps = {
  prefixCls: 'Yep-tab-bar',
  barTintColor: 'white',
  hidden: false,
};

export default TabBar;
