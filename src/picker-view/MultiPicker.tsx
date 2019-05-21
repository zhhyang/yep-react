import * as React from 'react';
import classNames from 'classnames';
import noop from '../_utils/noop';

class MultiPicker extends React.PureComponent<MultiPickerProps,any>{

  static defaultProps = {
    prefixCls: 'Yep-multi-picker',
    style: {},
    onValueChange: noop,
    onScrollChange: noop,
  };

  getValue = () => {
    const {children, selectedValue} = this.props;
    if (selectedValue && selectedValue.length) {
      return selectedValue;
    } else {
      if (!children) {
        return [];
      }
      return React.Children.map(children, (c: any) => {
        const cc = React.Children.toArray(c.children || c.props.children);
        return cc && cc[0] && cc[0].props.value;
      });
    }
  };

  onChange = (i:number, v:any, cb:any) => {
    const value = this.getValue().concat();
    value[i] = v;
    if (cb) {
      cb(value, i);
    }
  };

  onValueChange = (i:number, v?:any) => {
    this.onChange(i, v, this.props.onValueChange);
  };

  onScrollChange = (i:number, v?:any) => {
    this.onChange(i, v, this.props.onScrollChange);
  };

  render() {
    const {prefixCls, className, rootNativeProps, children, style} = this.props;
    const selectedValue = this.getValue();
    const colElements = React.Children.map(children, (col: any, i:number) => {
      return React.cloneElement(col, {
        selectedValue: selectedValue[i],
        onValueChange: (...args:any) => this.onValueChange(i, ...args),
        onScrollChange: this.onScrollChange && ((...args:any) => this.onScrollChange(i, ...args)),
      });
    });
    return (
      <div {...rootNativeProps} style={style} className={classNames(className, prefixCls)}>
        {colElements}
      </div>
    );
  };
}

export interface MultiPickerProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  selectedValue?: any[];
  rootNativeProps?: any;
  onValueChange?: (values: any, index: number) => void;
  children: any;
  onScrollChange?: (newValue: any, values?: any, index?:number) => void;
}



export default MultiPicker;
