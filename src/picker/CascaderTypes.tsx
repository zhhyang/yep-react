import * as React from 'react';

export type CascaderOneValue = string | number;
export type CascaderValue = CascaderOneValue[];

export interface ICascaderDataItem  {
  label: React.ReactNode,
  value: CascaderOneValue,
  children?: ICascaderDataItem[],
};

export interface ICascaderProps  {
  defaultValue?: CascaderValue,
  value?: CascaderValue,
  onChange?: (value: CascaderValue) => void,
  data: ICascaderDataItem[],
  cols?: number,
  disabled?: boolean,
  rootNativeProps?: {},
  pickerItemStyle?: {},
  indicatorStyle?: {},
  style?: any,
  prefixCls?: string,
  pickerPrefixCls?: string,
  className?: string,
  onScrollChange?: (value: CascaderValue) => void,
};
