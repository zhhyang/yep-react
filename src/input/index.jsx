import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from './../icon';


class Input extends PureComponent {
  constructor(props) {
    super();
    this.state = {value:props.defaultValue || props.value || ''};
  }

  componentWillReceiveProps(nextProps) {
    'value' in nextProps && this.setState({value: nextProps.value});
    'source' in nextProps && this.setState({result: nextProps.source});
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
    console.log(value);
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
      clearable,
      ...other
    } = this.props;
    const {value} = this.state;
    delete other.value;

    const inputProps = {value, disabled, size, placeholder, readOnly, type, maxLength};
    const classNames = classnames(
      'Yep-input',
      {
        [`Yep-input--${size}`]: size,
      },
      className
    );
    return (
      <div className={classnames('Yep-input-wrapper', className)} {...other}>
        <input className={classNames} {...inputProps} onChange={this.handleInput.bind(this)} />
        {(value || value === 0 || Number.isNaN(value)) && clearable && (
          <Icon
            type={'lego_cuowu1'}
            key={'lego_cuowu1'}
            size={'xxs'}
            className="Yep-input__clear"
            tabIndex="-1"
            onClick={this.handleClear.bind(this)}
          />
        )}
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

  // 是否配置删除按钮
  clearable: PropTypes.bool,

  // 同 input placeholder
  placeholder: PropTypes.string,
};

export default Input;
