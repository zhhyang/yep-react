import React from 'react'

import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonGroup = ({prefixCls, className, children}) => {

  const cls = classNames(prefixCls, className)

  return (
    <div className={cls}>
      {children}
    </div>
  )
};

ButtonGroup.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

ButtonGroup.defaultProps = {
  prefixCls: 'Yep-btns',
};

export default ButtonGroup;
