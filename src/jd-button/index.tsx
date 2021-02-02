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
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const {prefixCls, className, type, disabled, onClick, style, size, children, block, circle} = props;

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
  });

  const onPress = () => {
    if (disabled) return;
    onClick && onClick();
  };
  return (
    <button className={cls} aria-disabled={disabled} onClick={onPress} style={style}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  prefixCls: 'Yep-jd-btn',
  disabled: false,
  onClick: () => {},
  type: 'primary',
} as Partial<ButtonProps>;

Button.JdButtonGroup = ButtonGroup;
