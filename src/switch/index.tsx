import * as React from 'react';
import classNames from 'classnames';

export interface SwitchProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  currentStatus?: boolean;
  handleSwitch?: (checked: boolean) => void;
  onClick?: (value: boolean) => void;
  disabled?: boolean;
  name?: string;
  color?: string;
}

export default class Switch extends React.PureComponent<SwitchProps> {
  static defaultProps = {
    prefixCls: 'Yep-switch',
    style: {},
    name: '',
    currentStatus: false,
    disabled: false,
    onClick: () => {},
    handleSwitch: () => {},
  };

  constructor(props: SwitchProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e: any) {
    const {checked} = e.target;
    if (this.props.handleSwitch) {
      this.props.handleSwitch(checked);
    }
  }

  onClick(e: any) {
    const {onClick, currentStatus: checked} = this.props;
    if (onClick) {
      let val;
      if (e && e.target && e.target.checked !== undefined) {
        val = e.target.checked;
      } else {
        val = checked;
      }
      onClick(val);
    }
  }

  render() {
    const {disabled, prefixCls, className, style, color, name, currentStatus: checked} = this.props;
    const wrapperCls = classNames(prefixCls, className);
    const innerCls = classNames(`${prefixCls}-inner`, {
      [`${prefixCls}-inner-checked`]: checked,
      [`${prefixCls}-inner-disabled`]: disabled,
    });
    const circleCls = classNames(`${prefixCls}-circle`, {
      [`${prefixCls}-circle-unchecked`]: !checked,
      [`${prefixCls}-circle-checked`]: checked,
    });

    if (color && checked) {
      style!.backgroundColor = color;
    }

    return (
      <label className={wrapperCls}>
        <input
          type="checkbox"
          name={name}
          className={`${prefixCls}-checkbox`}
          disabled={disabled}
          checked={checked}
          onChange={this.onChange}
          value={checked ? 'on' : 'off'}
          {...(!disabled ? {onClick: this.onClick} : {})}
        />
        <div className={innerCls} style={style} />
        <div className={circleCls} />
      </label>
    );
  }
}
