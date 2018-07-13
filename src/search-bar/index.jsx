import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from './../icon';

class SearchBar extends PureComponent {
  constructor(props) {
    super();
    this.state = {value: props.defaultValue || props.value || ''};
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,

    // 输入框的值
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    // 初始化输入框的值
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    // 输入改变、清空后的回调，参数为当前输入框的值
    onChange: PropTypes.func,

    // 清空后的回调
    onClear: PropTypes.func,

    // 搜索后的回调
    onSearch: PropTypes.func,

    // 是否禁用
    disabled: PropTypes.bool,

    // 是否配置删除按钮
    clearable: PropTypes.bool,

    // 同 input placeholder
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'Yep-search-bar',
    style: {},
  };

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
    console.log(value, 'VALUE');
    this.setState({value});
    this.props.onChange && this.props.onChange(value);
  }

  handleSearch(value) {
    this.props.onChange && this.props.onChange(value);
  }

  handleSearchFn(value) {
    console.log(value, 'value in handleSearchFn ');
    this.props.onSearch && this.props.onSearch(value);
  }

  render() {
    const {
      className,
      prefixCls,
      type,
      defaultValue,
      onChange,
      onClear,
      onSearch,
      disabled,
      placeholder,
      readOnly,
      maxLength,
      clearable,
      ...other
    } = this.props;
    const {value} = this.state;
    delete other.value;

    const inputProps = {value, disabled, placeholder, readOnly, type, maxLength};
    const classNames = classnames(`${prefixCls}`, className);
    return (
      <div className="yep-search-bar-bj">
        <div className={classnames('Yep-search-bar-wrapper', className)} {...other}>
          <Icon type={'lego_sousuo'} key={'lego_sousuo'} size={'xxs'} />
          <input className={classNames} {...inputProps} onChange={this.handleInput.bind(this)} />
          {(value || value === 0 || Number.isNaN(value)) &&
            clearable && (
              <Icon
                type={'lego_cuowu1'}
                key={'lego_cuowu1'}
                size={'xxs'}
                className="Yep-search-bar__clear"
                tabIndex="-1"
                onClick={this.handleClear.bind(this)}
              />
            )}
        </div>
        {(value || value === 0 || Number.isNaN(value)) &&
          clearable && (
            <span className="yep-search-bar-cancel" onClick={this.handleSearchFn.bind(this)}>
              搜索
            </span>
          )}
      </div>
    );
  }
}

export default SearchBar;
