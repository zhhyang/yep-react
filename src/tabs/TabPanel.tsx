import * as React from 'react';
import classNames from 'classnames';

const TabPanel: React.FunctionComponent<TabPanelProps> = ({className, prefixCls, children}) => {
  const cls = classNames(prefixCls, className);
  return <div className={cls}>{children}</div>;
};
export interface TabPanelProps {
  tab?: React.ReactNode;
  prefixCls?: string;
  className?: string;
  active?: boolean;
  fixX?: boolean;
  fixY?: boolean;
}

TabPanel.defaultProps = {
  fixX: true,
  fixY: true,
};
export default TabPanel;
