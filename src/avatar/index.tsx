import * as React from 'react';
import classNames from 'classnames';

export interface AvatarProps {
  children: React.ReactNode;
  className?: string;
  icon?: string;
  prefixCls?: string;
  shape?: 'circle' | 'square';
  size: 'large' | 'small' | 'default' | number;
  src?: string;
  style?: React.CSSProperties;
}

function Avatar(props: AvatarProps) {
  let children = props.children;
  const isString = typeof children === 'string';
  const {className, icon, prefixCls, shape, size, src, style, ...restProps} = props;
  const sizeCls = classNames({
    [`${prefixCls}-large`]: size === 'large',
    [`${prefixCls}-small`]: size === 'small',
  });
  const cls = classNames(prefixCls, className, sizeCls, {
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-image`]: src,
    [`${prefixCls}-icon`]: icon,
  });
  const sizeStyle: React.CSSProperties =
    typeof size === 'number'
      ? {
          width: size,
          height: size,
          lineHeight: `${size}px`,
          fontSize: size / 2,
        }
      : {};
  if (isString) {
    children = `${children}`.slice(0, 1);
  } else if (src) {
    children = <img src={src} />;
  }
  return (
    <span className={cls} {...restProps} style={{...sizeStyle, ...style}}>
      {children}
    </span>
  );
}

Avatar.defaultProps = {
  prefixCls: 'Yep-avatar',
  shape: 'circle',
  size: 'default',
  style: {},
} as Partial<AvatarProps>;

export default Avatar;
