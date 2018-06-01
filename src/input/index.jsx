import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

const NormalInput = params => {
  const {className, size, ...other} = params;
  const classNames = classnames(
    'Yep-input',
    {
      [`Yep-input--${size}`]: size,
    },
    className
  );
  return <input className={classNames} {...other} />;
};

class Input extends PureComponent {
  constructor(props) {
    super();
    let value;
    'value' in props && (value = props.value);
    'defaultValue' in props && (value = props.defaultValue);
    this.state = {value};
  }

  componentWillReceiveProps(nextProps) {
    'value' in nextProps && this.setState({value: nextProps.value});
  }

  handleClear(e) {
    e.stopPropagation();
    this.props.onClear && this.props.onClear();
    this.handleChange('');
  }

  handleInput(e) {
    e.stopPropagation();
    this.handleChange(e.target.value);
  }

  handleChange(value) {
    this.setState({value});
    this.props.onChange && this.props.onChange(value);
  }

  render() {
    const {
      className,
      type,
      defaultValue,
      onChange,
      onClear,
      disabled,
      size,
      placeholder,
      readOnly,
      maxLength,
      ...other
    } = this.props;
    const {value} = this.state;
    delete other.value;

    const inputProps = {value, disabled, size, placeholder, readOnly, type, maxLength};

    return (
      <div className={classnames('Yep-clearable-input', className)} {...other}>
        <NormalInput onChange={this.handleInput.bind(this)} {...inputProps} />
        <button tabIndex="-1" disabled={inputProps.disabled} onClick={this.handleClear.bind(this)}>
          清除
        </button>
      </div>
    );
  }
}

Input.propTypes = {
  // 输入框的值
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // 初始化输入框的值
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // 输入改变、清空后的回调，参数为当前输入框的值
  onChange: PropTypes.func,

  // 清空后的回调
  onClear: PropTypes.func,

  // 输入框尺寸
  size: PropTypes.oneOf(['sm', 'lg']),

  // 是否禁用
  disabled: PropTypes.bool,

  // 同 input placeholder
  placeholder: PropTypes.string,
};

export default Input;
