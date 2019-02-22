import * as React from 'react';
import classNames from 'classnames';
import TouchFeedback from '../touch-feedback';
import Icon from '../icon';
export interface ListItemProps {
  prefixCls?: string;
  className?: string;
  role?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  align?: 'top'| 'middle'| 'bottom';
  disabled?: boolean;
  multipleLine?: boolean;
  thumb?: React.ReactNode| string;
  extra?: React.ReactNode;
  icon?: React.ReactNode| string;
  wrap?: boolean;
  activeStyle?: React.CSSProperties;
  error?: boolean;
}
export default class ListItem extends React.PureComponent<ListItemProps,any> {

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
      icon,
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

    const arrowCls = classNames(`${prefixCls}-arrow`, `${prefixCls}-arrow-horizontal`);

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
            {icon && (
              <div className={arrowCls} aria-hidden="true">
                {typeof icon === 'string' ? <Icon type={icon} size="xxs" /> : icon}
              </div>
            )}
          </div>
        </div>
      </TouchFeedback>
    );
  }
}

export const Brief:React.FunctionComponent<BriefProps> = ({prefixCls, style, children}) => (
  <div className={`${prefixCls}-brief`} style={style}>
    {children}
  </div>
);

export interface BriefProps {
  prefixCls?: string;
  style?: React.CSSProperties;
}

Brief.defaultProps = {
  prefixCls: 'Yep-list',
  style: {},
};
