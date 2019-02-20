import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabPanel = ({className, prefixCls, children}) => {
  const cls = classNames(prefixCls, className);
  return <div className={cls}>{children}</div>;
};
TabPanel.propTypes = {
  tab: PropTypes.node, //
  prefixCls: PropTypes.node, //
  className: PropTypes.string,
  active: PropTypes.bool,
  fixX: PropTypes.bool,
  fixY: PropTypes.bool,
};

TabPanel.defaultProps = {
  fixX: true,
  fixY: true,
};
export default TabPanel;
