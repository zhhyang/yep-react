import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonGroup = ({prefixCls, className, style, children}) => {
  const cls = classNames(prefixCls, className);

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

ButtonGroup.defaultProps = {
  prefixCls: 'Yep-btns',
};

export default ButtonGroup;
