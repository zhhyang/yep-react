import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'lodash/omit';
import Icon from './../icon';

class SearchBar extends PureComponent {
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
    value: '',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSearchFn = this.handleSearchFn.bind(this);
  }

  handleClear() {
    const {onChange} = this.props;
    onChange && onChange('');
  }

  handleChange(e) {
    const {value} = e.target;
    const {onChange} = this.props;
    onChange && onChange(value);
  }

  handleSearchFn(value) {
    const {onSearch} = this.props;
    onSearch && onSearch(value);
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
      value,
      ...other
    } = this.props;

    const inputProps = omit();
    const inputCls = classNames(`${prefixCls}`, className);
    return (
      <div className="yep-search-bar-bj">
        <div className={classNames('Yep-search-bar-wrapper', className)} {...other}>
          <Icon type={'lego_sousuo'} key={'lego_sousuo'} size={'xxs'} />
          <input className={inputCls} {...inputProps} onChange={this.handleChange} />
          {(value || value === 0 || Number.isNaN(value)) &&
            clearable && (
              <Icon
                type={'lego_cuowu1'}
                size={'xxs'}
                className="Yep-search-bar__clear"
                tabIndex="-1"
                onClick={this.handleClear}
              />
            )}
        </div>
        {(value || value === 0 || Number.isNaN(value)) &&
          clearable && (
            <span className="yep-search-bar-cancel" onClick={this.handleSearchFn}>
              搜索
            </span>
          )}
      </div>
    );
  }
}

export default SearchBar;
