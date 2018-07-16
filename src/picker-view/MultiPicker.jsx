import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MultiPickerHOC from './MultiPickerHOC';
import noop from '../_utils/noop';

const MultiPicker = props => {
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

MultiPicker.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  selectedValue: PropTypes.array,
  rootNativeProps: PropTypes.any,
  onValueChange: PropTypes.func,
  children: PropTypes.any,
  onScrollChange: PropTypes.func,
};

MultiPicker.defaultProps = {
  prefixCls: '',
  style: {},
  onValueChange: noop,
  onScrollChange: noop,
};

export default MultiPickerHOC(MultiPicker);
