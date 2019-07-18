import * as React from 'react';
import classNames from 'classnames';
import ButtonGroup from './ButtonGroup';
import TouchFeedback from '../touch-feedback';
import Icon from '../icon';

export interface ButtonProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  type: 'primary' | 'ghost';
  inline?: boolean;
  size?: string;
  submit?: boolean;
  onClick?: () => void;
  activeClassName?: string;
  activeStyle?: React.CSSProperties;
  icon?: string;
  children: React.ReactNode;
}

export default class Button extends React.PureComponent<ButtonProps, any> {
  static ButtonGroup = ButtonGroup;
  static defaultProps = {
    prefixCls: 'Yep-btn',
    disabled: false,
    activeStyle: {},
    onClick: () => {},
  };

  render() {
    const {
      prefixCls,
      className,
      type,
      submit,
      disabled,
      onClick,
      icon,
      inline,
      style,
      size,
      activeStyle,
      activeClassName,
      children,
    } = this.props;
    const El = submit ? 'button' : 'a';

    const cls = classNames(prefixCls, className, {
      'btn-primary': type === 'primary',
      'btn-disabled': disabled,
      'btn-ghost': type === 'ghost',
      'btn-inline': !!inline,
      'btn-sm': size === 'sm',
      'btn-md': size === 'md',
      [`${prefixCls}-icon`]: !!icon,
    });
    return (
      <TouchFeedback
        // tslint:disable-next-line:jsx-no-multiline-js
        activeClassName={activeClassName || (activeStyle ? `${prefixCls}-active` : undefined)}
        disabled={disabled}
        activeStyle={activeStyle}
      >
        <El
          className={cls}
          aria-disabled={disabled}
          onClick={disabled ? undefined : onClick}
          style={style}
          {...(submit ? {type: 'submit'} : {})}
        >
          {icon && <Icon type={icon} size={size === 'sm' ? 'xxs' : 'md'} className={`${prefixCls}-icon`} />}
          {children}
        </El>
      </TouchFeedback>
    );
  }
}

Button.ButtonGroup = ButtonGroup;
