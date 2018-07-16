import * as React from 'react';
export type InputEventHandler = (value?: string) => void;

export type InputItemPropsType = {
  prefixCls?: string,
  prefixListCls?: string,
  className?: string,
  onErrorClick?: React.MouseEventHandler<HTMLDivElement>,
  onExtraClick?: React.MouseEventHandler<HTMLDivElement>,
  type?: 'text' | 'phone' | 'password' | 'number',
  editable?: boolean,
  disabled?: boolean,
  name?: string,
  value?: string,
  defaultValue?: string,
  placeholder?: string,
  clear?: boolean,
  maxLength?: number,
  extra?: React.ReactNode,
  error?: boolean,
  labelNumber?: number,
  labelPosition?: 'left' | 'top',
  textAlign?: 'left' | 'center',
  updatePlaceholder?: boolean,
  onChange?: (value: string) => void,
  onFocus?: InputEventHandler,
  onBlur?: InputEventHandler,
};
export type InputPropsType = {
  onFocus?: InputEventHandler,
  onBlur?: InputEventHandler,
};
