// @flow
import React from 'react';
import MultiPicker from './MultiPicker';
import Picker from './Picker';

function getDefaultProps() {
  return {
    prefixCls: 'Yep-picker',
    pickerPrefixCls: 'Yep-picker-col',
    cols: 3,
    cascade: true,
    value: [],
    onChange() {},
  };
}

export type PickerData = {
  value: string | number,
  label: string,
  children?: PickerData[],
};

export type IPickerView = {
  prefixCls?: string,
  pickerPrefixCls?: string,
  cols?: number,
  cascade?: boolean,
  value?: any[],
  data?: PickerData[] | PickerData[][],
  onChange?: (value?: any) => void,
  onScrollChange?: (value?: any) => void,
  indicatorStyle?: any,
  itemStyle?: any,
};

export default class PickerView extends React.PureComponent<IPickerView, any> {
  static defaultProps = getDefaultProps();

  getCol = () => {
    const {data, pickerPrefixCls, indicatorStyle, itemStyle} = this.props;
    return data.map((col, index) => {
      return (
        <Picker
          key={index}
          prefixCls={pickerPrefixCls}
          style={{flex: 1}}
          indicatorStyle={indicatorStyle}
          itemStyle={itemStyle}
          data={col}
        >
          {col.map(item => {
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
