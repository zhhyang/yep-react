import * as React from 'react';
import classNames from 'classnames';
import Dropdown from '../dropdown';
import InputItem from '../input-item';

export interface AutoCompleteProps {
  prefixCls?: string;
  // 待搜索的数据源
  className?: string;

  // 待搜索的数据源
  source: [];

  // 输入框的值
  value: string;

  // 初始化输入框的值
  defaultValue?: string;

  // 输入改变、选择后的回调，参数为当前输入框的值
  onChange?: (value: any) => void;

  // 输入框大小，除默认外可选值：sm、lg
  size?: string;

  // 是否禁用
  disabled?: boolean;

  // 是否打开下拉
  isOpen?: boolean;
  // 输入框是否显示清空按钮
  clear?: boolean;

  // 同 input placeholder
  placeholder?: string;
}

class AutoComplete extends React.PureComponent<AutoCompleteProps, any> {
  lastValue:any;
  constructor(props: AutoCompleteProps) {
    super(props);
    this.state = {
      open: false,
      index: -1,
      result: props.source,
      value: props.defaultValue || props.value || '',
    };
  }

  static defaultProps = {
    prefixCls: 'Yep-auto-complete',
  };

  componentWillReceiveProps(nextProps:AutoCompleteProps) {
    'value' in nextProps && this.setState({value: nextProps.value});
    'source' in nextProps && this.setState({result: nextProps.source});
  }

  handleInput = (value:any) => {
    this.lastValue = value;
    const state = {value} as any;
    if (!value) {
      state.open = true;
      state.result = this.props.source;
      this.setState(state);
    } else {
      // reset tab index
      state.index = -1;
      state.result = this.props.source.filter((item:string) => item.indexOf(value) > -1);
      state.open = !!state.result.length;
      this.setState(state);
    }
    this.props.onChange && this.props.onChange(value);
  }

  handleSelect(value:any) {
    this.setState({
      value,
      open: false,
    });
    this.props.onChange && this.props.onChange(value);
  }

  handleKeyDown = (e:any) => {
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
    const {prefixCls, source,  onChange, disabled, isOpen, ...other} = this.props;
    const inputProps = {
      ...other,
      onKeyDown:this.handleKeyDown
    }
    return (
      <Dropdown
        open={isOpen || open}
        disabled={disabled}
        aligned={true}
        onToggle={open => this.setState({open})}
        overlay={
          <div className={`${prefixCls}__popover`}>
            <ul className={`${prefixCls}__result`}>
              {result.map((item:any, i:number) => (
                <li
                  key={item}
                  className={classNames({[`${prefixCls}__option--active`]: index === i})}
                  onClick={this.handleSelect.bind(this, item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <InputItem
          value={value}
          onChange={this.handleInput}
          disabled={disabled}
          {...inputProps}
        />
      </Dropdown>
    );
  }
}

export default AutoComplete;
