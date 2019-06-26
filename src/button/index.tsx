import * as React from 'react';
import classNames from 'classnames';
import ButtonGroup from './ButtonGroup';
import Icon from '../icon';

export interface ButtonProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'primary' | 'ghost' | 'fill' | 'light' | 'white';
  block?: boolean;
  circle?: boolean;
  size?: string;
  onClick?: () => void;
  icon?: string;
  iconColor?: string;
  iconSize?: 'xxs' | 'md';
  children: React.ReactNode;
}

export default class Button extends React.PureComponent<ButtonProps, any> {
  static ButtonGroup = ButtonGroup;
  static defaultProps = {
    prefixCls: 'Yep-btn',
    disabled: false,
    activeStyle: {},
    onClick: () => {},
    iconColor: '#f0250f',
    iconSize: 'xxs',
    type: 'primary',
  };

  render() {
    const {
      prefixCls,
      className,
      type,
      disabled,
      onClick,
      icon,
      style,
      size,
      children,
      block,
      circle,
      iconColor,
      iconSize,
    } = this.props;

    const cls = classNames(prefixCls, className, {
      'btn-primary': type === 'primary',
      'btn-white': type === 'white',
      'btn-block': block,
      'btn-disabled': disabled,
      'btn-ghost': type === 'ghost',
      'btn-fill': type === 'fill',
      'btn-light': type === 'light',
      'btn-sm': size === 'sm',
      'btn-xxs': size === 'xxs',
      'btn-circle': circle,
      [`${prefixCls}-icon`]: !!icon,
    });
    return (
      <button className={cls} aria-disabled={disabled} onClick={disabled ? undefined : onClick} style={style}>
        {icon && <Icon type={icon} color={iconColor} size={iconSize} className={`${prefixCls}-icon`} />}
        {children}
      </button>
    );
  }
}

Button.ButtonGroup = ButtonGroup;
