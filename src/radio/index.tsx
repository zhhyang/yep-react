import * as React from 'react';

import classNames from 'classnames';
import BaseCheckbox from '../checkbox/BaseCheckbox';

export type Option = {
  label: string;
  value: string;
  disabled?: boolean;
  defaultChecked?: boolean;
};
export interface RadioProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (value: any) => void;
  name?: string;
  /**
   * ['option1','option2']
   *
   * or
   *
   * [{
   *  label:'label1',
   *  value: 'value1'
   * },{
   *  label: 'Option2',
            value: '2',
            disabled: true,
   * },{
   * label: 'Option3',
            value: '3',
            disabled: true,
            defaultChecked:true,
   * }]
   *
   *
   */
  options: Option[];
  checked?: string | number;
  /**
   * 是否水平排列
   */
  horizontal?: boolean;
}
export default class Radio extends React.PureComponent<RadioProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-radio',
    options: [],
    horizontal: false,
  };

  constructor(props: RadioProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // @ts-ignore
      value: props.checked || props.options[0].value || props.options[0].label || props.options[0],
    };
  }

  handleChange(value: any) {
    const {onChange} = this.props;
    this.setState({
      value,
    });
    onChange && onChange(value);
  }

  render() {
    const {className, style, options, horizontal, onChange, ...restProps} = this.props;

    const {prefixCls} = restProps;
    const wrapCls = classNames(`${prefixCls}-wrapper`, className, {
      [`${prefixCls}-horizontal`]: horizontal,
      [`${prefixCls}-vertical`]: !horizontal,
    });
    return (
      <div className={wrapCls} style={style}>
        {options.map((option: any, index: number) => (
          <BaseCheckbox
            key={index}
            type="radio"
            label={option.label || option}
            disabled={option.disabled}
            checked={this.state.value === (option.value || option.label || option)}
            onChange={() => this.handleChange(option.value || option.label || option)}
            value={option.value || option.label || option}
            {...restProps}
          />
        ))}
      </div>
    );
  }
}
