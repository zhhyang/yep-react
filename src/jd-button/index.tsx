import * as React from 'react';
import classNames from 'classnames';
import ButtonGroup from './ButtonGroup';

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
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default class Button extends React.PureComponent<ButtonProps, any> {
  static JdButtonGroup = ButtonGroup;
  static defaultProps = {
    prefixCls: 'Yep-jd-btn',
    disabled: false,
    activeStyle: {},
    onClick: () => {},
    type: 'primary',
  };

  render() {
    const {prefixCls, className, type, disabled, onClick, icon, style, size, children, block, circle} = this.props;

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
        {icon}
        {children}
      </button>
    );
  }
}

Button.JdButtonGroup = ButtonGroup;
