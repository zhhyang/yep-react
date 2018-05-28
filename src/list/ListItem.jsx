import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import TouchFeedback from '../touch-feedback';
import Icon from '../icon';

export default class ListItem extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    role: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    align: PropTypes.oneOf(['top', 'middle', 'bottom']),
    disabled: PropTypes.bool,
    multipleLine: PropTypes.bool,
    thumb: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    extra: PropTypes.node,
    arrow: PropTypes.oneOf(['horizontal', 'down', 'up', 'empty', '']),
    wrap: PropTypes.bool,
    activeStyle: PropTypes.object,
    error: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'Yep-list',
    align: 'middle',
    error: false,
    multipleLine: false,
    wrap: false,
  };

  render() {
    const {
      prefixCls,
      className,
      activeStyle,
      error,
      align,
      wrap,
      disabled,
      children,
      multipleLine,
      thumb,
      extra,
      arrow,
      onClick,
      ...restProps
    } = this.props;
    const wrapCls = classNames(`${prefixCls}-item`, className, {
      [`${prefixCls}-item-disabled`]: disabled,
      [`${prefixCls}-item-error`]: error,
      [`${prefixCls}-item-top`]: align === 'top',
      [`${prefixCls}-item-middle`]: align === 'middle',
      [`${prefixCls}-item-bottom`]: align === 'bottom',
    });
    const lineCls = classNames(`${prefixCls}-line`, {
      [`${prefixCls}-line-multiple`]: multipleLine,
      [`${prefixCls}-line-wrap`]: wrap,
    });

    const arrowCls = classNames(`${prefixCls}-arrow`, {
      [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
      [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
      [`${prefixCls}-arrow-vertical-up`]: arrow === 'up',
    });

    const touchProps = {};
    Object.keys(restProps).forEach(key => {
      if (/onTouch/i.test(key)) {
        touchProps[key] = restProps[key];
        delete restProps[key];
      }
    });

    return (
      <TouchFeedback
        {...touchProps}
        disabled={disabled || !onClick}
        activeStyle={activeStyle}
        activeClassName={`${prefixCls}-item-active`}
      >
        <div {...restProps} onClick={onClick} className={wrapCls}>
          {thumb && (
            <div className={`${prefixCls}-thumb`}>{typeof thumb === 'string' ? <img src={thumb} /> : thumb}</div>
          )}
          <div className={lineCls}>
            {children !== undefined && <div className={`${prefixCls}-content`}>{children}</div>}
            {extra !== undefined && <div className={`${prefixCls}-extra`}>{extra}</div>}
            {arrow && (
              <div className={arrowCls} aria-hidden="true">
                <Icon type="arrow-right" size="xxs" />
              </div>
            )}
          </div>
        </div>
      </TouchFeedback>
    );
  }
}

export const Brief = ({prefixCls,style,children}) => (
  <div className={`${prefixCls}-brief`} style={style}>
    {children}
  </div>
);

Brief.propTypes = {
  prefixCls:PropTypes.string,
  style:PropTypes.object,
}

Brief.defaultProps = {
  prefixCls:'Yep-list',
  style:{},
}
