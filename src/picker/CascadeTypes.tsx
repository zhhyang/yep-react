import * as React from 'react';

export type CascadeOneValue = string | number;
export type CascadeValue = CascadeOneValue[];

export interface ICascadeDataItem {
  label: React.ReactNode;
  value: CascadeOneValue;
  children?: ICascadeDataItem[];
}

export interface ICascadeProps {
  defaultValue?: CascadeValue;
  value?: CascadeValue;
  onChange?: (value: CascadeValue) => void;
  data: ICascadeDataItem[];
  cols: number;
  disabled?: boolean;
  rootNativeProps?: {};
  pickerItemStyle?: {};
  indicatorStyle?: {};
  style?: any;
  prefixCls?: string;
  pickerPrefixCls?: string;
  className?: string;
  onScrollChange: (value: any) => void;
}
