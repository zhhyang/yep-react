import React, {PureComponent} from 'react';
import classNames from 'classnames';

import Input from './Input';
import noop from '../_utils/noop';
import type {InputItemPropsType} from './types';
import TouchFeedback from '../touch-feedback';
import {omit} from 'lodash';
import Icon from '../icon';

type State = {
  value: string | number,
  placeholder: string,
};

class InputItem extends PureComponent<InputItemPropsType, State> {
  inputRef: Input | null;
  constructor(props) {
    super();
    this.state = {
      value: props.defaultValue || props.value || '',
      placeholder: props.placeholder,
    };
  }

  static defaultProps = {
    prefixCls: 'Yep-input',
    prefixListCls: 'Yep-list',
    style: {},
    type: 'text',
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
    labelNumber: 5,
    updatePlaceholder: false,
  };

  componentWillReceiveProps(nextProps) {
    if ('placeholder' in nextProps && !nextProps.updatePlaceholder) {
      this.setState({
        placeholder: nextProps.placeholder,
      });
    }
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  componentWillUnmount() {
    if (this.debounceTimeout) {
      window.clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
  }

  handleOnChange = (value: string, isMutated: boolean = false) => {
    const {onChange} = this.props;

    if (!('value' in this.props)) {
      this.setState({value});
    } else {
      this.setState({value: this.props.value});
    }
    if (onChange) {
      isMutated ? setTimeout(() => onChange(value)) : onChange(value);
    }
  };

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    console.log(value);
    const {type} = this.props;

    let newValue = value;
    switch (type) {
      case 'phone':
        newValue = value.replace(/\D/g, '').substring(0, 11);
        const valueLen = newValue.length;
        if (valueLen > 3 && valueLen < 8) {
          newValue = `${newValue.substr(0, 3)} ${newValue.substr(3)}`;
        } else if (valueLen >= 8) {
          newValue = `${newValue.substr(0, 3)} ${newValue.substr(3, 4)} ${newValue.substr(7)}`;
        }
        break;
      case 'number':
        newValue = value.replace(/\D/g, '');
        break;
      case 'text':
      case 'password':
      default:
        break;
    }
    this.handleOnChange(newValue, newValue !== value);
  };

  onInputFocus = (value: string) => {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
    this.setState({
      focus: true,
    });
    if (this.props.onFocus) {
      this.props.onFocus(value);
    }
  };

  onInputBlur = (value: string) => {
    if (this.inputRef) {
      // this.inputRef may be null if customKeyboard unmount
      this.debounceTimeout = window.setTimeout(() => {
        if (document.activeElement !== (this.inputRef && this.inputRef.inputRef)) {
          this.setState({
            focus: false,
          });
        }
      }, 200);
    }
    if (this.props.onBlur) {
      this.props.onBlur(value);
    }
  };

  clearInput = () => {
    if (this.props.type !== 'password' && this.props.updatePlaceholder) {
      this.setState({
        placeholder: this.props.value,
      });
    }
    this.setState({
      value: '',
    });
    if (this.props.onChange) {
      this.props.onChange('');
    }
    this.focus();
  };

  // this is instance method for user to use
  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  };

  render() {
    const {
      className,
      prefixCls,
      prefixListCls,
      style,
      type,
      name,
      defaultValue,
      disabled,
      editable,
      maxLength,
      error,
      labelNumber,
      children,
      extra,
      clear,
      clearIcon,
      onExtraClick,
      onErrorClick,
      ...restProps
    } = this.props;
    const {value, focus, placeholder} = this.state;

    const wrapCls = classNames(
      `${prefixListCls}-item`,
      `${prefixCls}-item`,
      `${prefixListCls}-item-middle`,
      className,
      {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-error`]: error,
        [`${prefixCls}-focus`]: focus,
        [`${prefixCls}-android`]: focus,
      }
    );
    const labelCls = classNames(`${prefixCls}-label`, `${prefixCls}-label-${labelNumber}`);

    return (
      <div className={wrapCls}>
        <div className={`${prefixListCls}-line`}>
          {children ? <div className={labelCls}>{children}</div> : null}
          <div className={`${prefixCls}-control`}>
            <Input
              {...omit(restProps, 'updatePlaceholder')}
              ref={(el: any) => (this.inputRef = el)}
              value={value}
              defaultValue={undefined}
              style={style}
              type={type}
              maxLength={maxLength}
              name={name}
              placeholder={placeholder}
              readOnly={!editable}
              disabled={disabled}
              onChange={this.onInputChange}
              onFocus={this.onInputFocus}
              onBlur={this.onInputBlur}
            />
          </div>
          {clear && editable && !disabled && (value && `${value}`.length > 0) ? (
            <TouchFeedback activeClassName={`${prefixCls}-clear-active`}>
              <div className={`${prefixCls}-clear`} onClick={this.clearInput}>
                {React.isValidElement(clearIcon) ? clearIcon : <Icon type={'close'} size={'xxs'} color={'#999BAA'} />}
              </div>
            </TouchFeedback>
          ) : null}
          {error ? <div className={`${prefixCls}-error-extra`} onClick={onErrorClick} /> : null}
          {extra !== '' ? (
            <div className={`${prefixCls}-extra`} onClick={onExtraClick}>
              {extra}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default InputItem;
