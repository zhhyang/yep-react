import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import Dropdown from '../dropdown';
import Input from '../input-item/Input';

class AutoComplete extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      open: false,
      index: -1,
      result: props.source,
      value: props.defaultValue || props.value || '',
    };
  }

  static propTypes = {
    // 待搜索的数据源
    className: PropTypes.string,

    // 待搜索的数据源
    source: PropTypes.array.isRequired,

    // 输入框的值
    value: PropTypes.string,

    // 初始化输入框的值
    defaultValue: PropTypes.string,

    // 输入改变、选择后的回调，参数为当前输入框的值
    onChange: PropTypes.func,

    // 输入框大小，除默认外可选值：sm、lg
    size: PropTypes.string,

    // 是否禁用
    disabled: PropTypes.bool,

    // 是否打开下拉
    isOpen: PropTypes.bool,
    // 输入框是否显示清空按钮
    clearable: PropTypes.bool,

    // 同 input placeholder
    placeholder: PropTypes.string,
    // 提示框对齐方式，默认 `middle`
    customProp({value, onChange}) {
      if (value && !onChange) {
        return new Error('You provided a `value` prop without an `onChange` handler');
      }
    },
  };

  static defaultProps = {
    prefixCls: 'Yep-auto-complete',
  };

  componentWillReceiveProps(nextProps) {
    'value' in nextProps && this.setState({value: nextProps.value});
    'source' in nextProps && this.setState({result: nextProps.source});
  }

  handleInput(value) {
    this.lastValue = value;
    const state = {value};
    if (!value) {
      state.open = true;
      state.result = this.props.source;
      this.setState(state);
    } else {
      // reset tab index
      state.index = -1;
      state.result = this.props.source.filter(item => item.indexOf(value) > -1);
      state.open = !!state.result.length;
      this.setState(state);
    }
    this.props.onChange && this.props.onChange(value);
  }

  handleSelect(value) {
    this.setState({
      value,
      open: false,
    });
    this.props.onChange && this.props.onChange(value);
  }

  handleKeyDown(e) {
    const {open, result} = this.state;
    if (open) {
      const input = e.target;
      const key = e.key;
      let {index} = this.state;
      if (key === 'ArrowDown' || key === 'ArrowUp') {
        if (key === 'ArrowDown') {
          if (index === result.length - 1) index = -1;
          else index++;
        }
        if (key === 'ArrowUp') {
          e.preventDefault();
          if (index === -1) index = result.length - 1;
          else index--;
        }
        this.setState({
          index,
          value: result[index] || this.lastValue,
        });
      }
      if (key === 'Enter') {
        this.handleSelect(result[index]);
        input.blur();
      }
    }
  }

  render() {
    const {open, index, result, value} = this.state;
    const {prefixCls, className, source, onFocus, onKeyDown, onChange, disabled, isOpen, align, ...other} = this.props;
    const cls = classnames(prefixCls, className);

    return (
      <Dropdown
        className={cls}
        open={!!isOpen || open}
        disabled={!!disabled}
        aligned
        onToggle={open => this.setState({open})}
      >
        <Dropdown.DropdownToggle>
          <Input
            value={value}
            onKeyDown={this.handleKeyDown.bind(this)}
            onChange={this.handleInput.bind(this)}
            disabled={!!disabled}
            open={!!isOpen || open}
            {...other}
          />
        </Dropdown.DropdownToggle>
        <Dropdown.DropdownMenu className={`${prefixCls}__popover`}>
          <ul className={`${prefixCls}__result`}>
            {result.map((item, i) => (
              <li
                key={item}
                className={classnames({[`${prefixCls}__option--active`]: index === i})}
                onClick={this.handleSelect.bind(this, item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </Dropdown.DropdownMenu>
      </Dropdown>
    );
  }
}

export default AutoComplete;
