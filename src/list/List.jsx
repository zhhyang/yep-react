import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const List = ({prefixCls, children, className, style, renderHeader, renderFooter, ...restProps,}) => {

  const wrapCls = classNames(prefixCls, className)

  return (
    <div className={wrapCls} style={style} {...restProps}>
      {
        renderHeader && (
          <div className={`${prefixCls}-header`}>
            {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
          </div>
        )
      }
      {
        children && (
          <div className={`${prefixCls}-body`}>
            {children}
          </div>
        )
      }
      {
        renderFooter && (
          <div className={`${prefixCls}-footer`}>
            {
              typeof renderFooter === 'function' ? renderFooter() : renderFooter
            }
          </div>
        )
      }
    </div>
  )
};

List.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  renderHeader: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]),
  renderFooter: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]),
};

List.defaultProps = {
  prefixCls: 'Yep-list',
  style: {},
};

export default List;
