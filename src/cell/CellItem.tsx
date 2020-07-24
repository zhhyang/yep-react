import * as React from 'react';
import classNames from 'classnames';
import TouchFeedback from '../touch-feedback';
import MoreOutlined from '@jdcfe/icons-react/MoreOutlined';

export interface CellItemProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  align?: 'top' | 'middle';
  disabled?: boolean;
  label: React.ReactNode | string;
  icon?: boolean;
  wrap?: boolean;
  activeStyle?: React.CSSProperties;
  children?: React.ReactNode;
}
function CellItem(props: CellItemProps) {
  const {
    prefixCls,
    className,
    activeStyle,
    align,
    wrap,
    disabled,
    children,
    label,
    icon,
    onClick,
    ...restProps
  } = props;
  const wrapCls = classNames(`${prefixCls}-item`, className, {
    [`${prefixCls}-item-disabled`]: disabled,
    [`${prefixCls}-item-top`]: align === 'top',
    [`${prefixCls}-item-middle`]: align === 'middle',
  });
  const lineCls = classNames(`${prefixCls}-line`, {
    [`${prefixCls}-line-wrap`]: wrap,
  });

  const touchProps = {} as any;
  Object.keys(restProps).forEach(key => {
    if (/onTouch/i.test(key)) {
      // @ts-ignore
      touchProps[key] = restProps[key];
      // @ts-ignore
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
        <div className={`${prefixCls}-label`}>{label}</div>
        <div className={lineCls}>
          {children !== undefined && <div className={`${prefixCls}-content`}>{children}</div>}
          {icon && (
            <div className={`${prefixCls}-arrow`} aria-hidden="true">
              <MoreOutlined />
            </div>
          )}
        </div>
      </div>
    </TouchFeedback>
  );
}

CellItem.defaultProps = {
  prefixCls: 'Yep-cell',
  align: 'middle',
  wrap: false,
  icon: true,
} as Partial<CellItemProps>;

export const Brief: React.FunctionComponent<BriefProps> = ({prefixCls, style, children}) => (
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
} as Partial<BriefProps>;

export default CellItem;
