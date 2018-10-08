import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Switch extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    currentStatus: PropTypes.bool,
    handleSwitch: PropTypes.func,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    color: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'Yep-switch',
    style: {},
    name: '',
    currentStatus: false,
    disabled: false,
    onClick: () => {},
    handleSwitch: () => {},
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {checked} = e.target;
    if (this.props.handleSwitch) {
      this.props.handleSwitch(checked);
    }
  }

  onClick(e) {
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
    const innerCls = classNames('checkbox', {
      [`checkbox-disabled`]: disabled,
    });

    if (color && checked) {
      style.backgroundColor = color;
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
          {...(!disabled ? {onClick: this.handleSwitch} : {})}
        />
        <div className={innerCls} style={style} {...(disabled ? {onClick: this.handleSwitch} : {})} />
      </label>
    );
  }
}
