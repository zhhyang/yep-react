import * as React from 'react';
import classNames from 'classnames';
import MultiPickerHOC from './MultiPickerHOC';
import noop from '../_utils/noop';

const MultiPicker: React.FunctionComponent<MultiPickerProps> = (props: MultiPickerProps) => {
  const {prefixCls, className, rootNativeProps, children, style} = props;
  const selectedValue = props.getValue();
  const colElements = React.Children.map(children, (col: any, i) => {
    return React.cloneElement(col, {
      selectedValue: selectedValue[i],
      onValueChange: (...args) => props.onValueChange(i, ...args),
      onScrollChange: props.onScrollChange && ((...args) => props.onScrollChange(i, ...args)),
    });
  });
  return (
    <div {...rootNativeProps} style={style} className={classNames(className, prefixCls)}>
      {colElements}
    </div>
  );
};

export interface MultiPickerProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  selectedValue?: any[];
  rootNativeProps?: any;
  onValueChange?: (values: any, index: number) => void;
  children: any;
  onScrollChange?: () => void;
}

MultiPicker.defaultProps = {
  prefixCls: '',
  style: {},
  onValueChange: noop,
  onScrollChange: noop,
};

export default MultiPickerHOC(MultiPicker) as MultiPicker;
