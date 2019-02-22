import * as React from 'react';
import BaseCheckbox from './BaseCheckbox';
import classNames from 'classnames';
export interface CheckboxProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}
export default class Checkbox extends React.PureComponent<CheckboxProps> {
  static defaultProps = {
    prefixCls: 'Yep-checkbox',
  };

  render() {
    const {className, style, children, ...restProps} = this.props;
    const {prefixCls} = restProps;
    const wrapCls = classNames(`${prefixCls}-wrapper`, className);
    return (
      <label className={wrapCls} style={style}>
        <BaseCheckbox {...restProps} {...(children ? {label: children} : {})} />
      </label>
    );
  }
}
