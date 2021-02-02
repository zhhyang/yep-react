import * as React from 'react';
import {DatePickerProps} from './type';
import DatePicker from './DatePicker';
import PickerPopup from '../picker/PickerPopup';
export interface PopupDatePickerProps extends DatePickerProps {
  onChange?: (data: any) => void;
  onOk?: (data: any) => void;
  onCancel?: () => void;
  show?: boolean;
}
class PopupDatePicker extends React.Component<PopupDatePickerProps, any> {
  static defaultProps = {
    mode: 'datetime',
    prefixCls: 'Yep-picker',
    pickerPrefixCls: 'Yep-picker-col',
    minuteStep: 1,
    use12Hours: false,
    pickerValueProp: 'date',
    pickerValueChangeProp: 'onDateChange',
    title: '',
  };

  scrollValue: HTMLDivElement;

  setScrollValue = (v: any) => {
    this.scrollValue = v;
  };

  onOk = (v: any) => {
    const {onChange, onOk} = this.props;
    if (this.scrollValue !== undefined) {
      v = this.scrollValue;
    }
    if (onChange) {
      onChange(v);
    }
    if (onOk) {
      onOk(v);
    }
  };

  render() {
    const {
      show,
      onCancel,
      minuteStep,
      locale,
      minDate,
      maxDate,
      mode,
      pickerPrefixCls,
      prefixCls,
      value,
      use12Hours,
      onValueChange,
    } = this.props;
    return (
      <PickerPopup
        show={show}
        onCancel={onCancel}
        onOk={this.onOk}
        picker={
          <DatePicker
            minuteStep={minuteStep}
            locale={locale}
            minDate={minDate}
            maxDate={maxDate}
            mode={mode}
            pickerPrefixCls={pickerPrefixCls}
            prefixCls={prefixCls}
            defaultDate={value || new Date()}
            use12Hours={use12Hours}
            onValueChange={onValueChange}
            onScrollChange={this.setScrollValue}
          />
        }
      />
    );
  }
}

export default PopupDatePicker;
