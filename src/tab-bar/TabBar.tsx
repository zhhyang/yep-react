import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabBar = ({prefixCls, className, style, barTintColor, hidden, children}) => {
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

TabBar.propTypes = {
  prefixCls: PropTypes.string,
  barTintColor: PropTypes.string,
  hidden: PropTypes.bool,
};

TabBar.defaultProps = {
  prefixCls: 'Yep-tab-bar',
  barTintColor: 'white',
  hidden: false,
};

export default TabBar;
