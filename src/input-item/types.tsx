import * as React from 'react';
export type InputEventHandler = (value?: string) => void;

export interface InputItemPropsType  {
  prefixCls?: string;
  prefixListCls?: string;
  className?: string;
  style:React.CSSProperties;
  onErrorClick?: React.MouseEventHandler<HTMLDivElement>;
  onExtraClick?: React.MouseEventHandler<HTMLDivElement>;
  type?: 'text' | 'phone' | 'password' | 'number';
  editable?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  clear?: boolean;
  maxLength?: number;
  extra?: React.ReactNode;
  error?: boolean;
  labelNumber?: number;
  labelPosition?: 'left' | 'top';
  textAlign?: 'left' | 'center';
  updatePlaceholder?: boolean;
  onChange?: (value: string) => void;
  onFocus?: InputEventHandler;
  onBlur?: InputEventHandler;
  clearIcon?: React.ReactNode;
}
export type InputPropsType = {
  value?: any;
  onFocus?: InputEventHandler;
  onBlur?: InputEventHandler;
  readOnly?: boolean;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
};
