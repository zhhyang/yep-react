import React from 'react'

import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabBar = ({prefixCls, className, style, barTintColor,children}) => {

  const cls = classNames(prefixCls, className);
  const tabBarStyle = {...style, ...{backgroundColor: barTintColor}}
  return (
    <div className={cls} style={tabBarStyle}>
      {children}
    </div>
  )
};

TabBar.propTypes = {
  prefixCls: PropTypes.string,
  barTintColor: PropTypes.string,
};

TabBar.defaultProps = {
  prefixCls: 'Yep-tab-bar',
  barTintColor: 'white',
};

export default TabBar;

