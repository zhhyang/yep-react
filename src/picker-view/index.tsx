import * as React from 'react';
import MultiPicker from './MultiPicker';
import Picker from './Picker';

export type PickerData = {
  value: string | number,
  label: string,
  children?: PickerData[],
};

export interface IPickerView  {
  prefixCls?: string;
  pickerPrefixCls?: string;
  cols?: number;
  cascade?: boolean;
  value?: any[];
  data: PickerData[] | PickerData[][];
  onChange?: (value?: any) => void;
  onScrollChange?: (value?: any) => void;
  indicatorStyle?: any;
  itemStyle?: any;
};

export default class PickerView extends React.PureComponent<IPickerView, any> {
  static defaultProps = {
    prefixCls: 'Yep-picker',
    pickerPrefixCls: 'Yep-picker-col',
    cols: 3,
    cascade: true,
    value: [],
    onChange() {},
  };

  getCol = () => {
    const {data, pickerPrefixCls, indicatorStyle, itemStyle} = this.props;
    //@ts-ignore
    return data.map((col:any, index:number) => {
      return (
        <Picker
          key={index}
          prefixCls={pickerPrefixCls}
          style={{flex: 1}}
          indicatorStyle={indicatorStyle}
          itemStyle={itemStyle}
        >
          {col.map((item:any) => {
            return (
              <Picker.Item key={item.value} value={item.value}>
                {item.label}
              </Picker.Item>
            );
          })}
        </Picker>
      );
    });
  };
  render() {
    const {prefixCls, value, onChange, onScrollChange} = this.props;

    return (
      <MultiPicker
        prefixCls={prefixCls}
        selectedValue={value}
        onValueChange={onChange}
        onScrollChange={onScrollChange}
        style={{flexDirection: 'row'}}
      >
        {this.getCol()}
      </MultiPicker>
    );
  }
}
