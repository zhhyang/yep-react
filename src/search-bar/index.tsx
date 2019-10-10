import * as React from 'react';
import classNames from 'classnames';
import Icon from './../icon';

export interface SearchBarProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;

  // 输入框的值
  value: any;

  // 输入框的值类型
  type?: string;

  // 初始化输入框的值
  defaultValue?: string | number;

  // 输入改变、清空后的回调，参数为当前输入框的值
  onChange?: (value: any) => void;

  // 搜索后的回调
  onSearch?: (value: any) => void;

  // 是否禁用
  disabled?: boolean;

  // 是否配置删除按钮
  clearable?: boolean;

  // 同 input placeholder
  placeholder?: string;
  readOnly?: boolean;
  maxLength?: number;
}

class SearchBar extends React.PureComponent<SearchBarProps> {
  static defaultProps = {
    prefixCls: 'Yep-search-bar',
    style: {},
    type: 'text',
    value: '',
    readOnly: false,
  };

  constructor(props: SearchBarProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSearchFn = this.handleSearchFn.bind(this);
  }

  handleClear() {
    const {onChange} = this.props;
    onChange && onChange('');
  }

  handleChange(e: any) {
    const {value} = e.target;
    const {onChange} = this.props;
    onChange && onChange(value);
  }

  handleSearchFn(value: any) {
    const {onSearch} = this.props;
    onSearch && onSearch(value);
  }

  render() {
    const {
      className,
      prefixCls,
      disabled,
      placeholder,
      readOnly,
      maxLength,
      clearable,
      value,
      type,
      style,
    } = this.props;

    const inputProps = {value, type, disabled, placeholder, readOnly, maxLength};
    const inputCls = classNames(`${prefixCls}`, className);
    return (
      <div className="yep-search-bar-bj">
        <div className={classNames('Yep-search-bar-wrapper', className)} style={style}>
          <Icon type={'lego_sousuo'} key={'lego_sousuo'} size={'xxs'} />
          <input className={inputCls} {...inputProps} onChange={this.handleChange} />
          {(value || value === 0 || Number.isNaN(value)) && clearable && (
            <Icon type={'lego_cuowu1'} size={'xxs'} className="Yep-search-bar__clear" onClick={this.handleClear} />
          )}
        </div>
        {(value || value === 0 || Number.isNaN(value)) && clearable && (
          <span className="yep-search-bar-cancel" onClick={this.handleSearchFn}>
            搜索
          </span>
        )}
      </div>
    );
  }
}

export default SearchBar;
