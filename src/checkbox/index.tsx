import * as React from 'react';
import BaseCheckbox,{BaseCheckboxProps} from './BaseCheckbox';
import classNames from 'classnames';
export interface CheckboxProps extends BaseCheckboxProps{
  children:string;
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
