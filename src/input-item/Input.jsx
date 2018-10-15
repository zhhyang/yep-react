import React, {PureComponent} from 'react';
import {InputPropsType} from './types';

class Input extends PureComponent<InputPropsType> {
  inputRef: HTMLInputElement | null;

  onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const {value} = e.target;
    if (this.props.onBlur) {
      this.props.onBlur(value);
    }
  };

  onInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const {value} = e.target;
    if (this.props.onFocus) {
      this.props.onFocus(value);
    }
  };

  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  };

  onClick = e => {
    const {readOnly, onClick} = this.props;
    if (readOnly) {
      this.inputRef.blur();
    }
    if (onClick) {
      onClick(e);
    }
  };

  render() {
    const {onBlur, onFocus, onClick, ...restProps} = this.props;
    return (
      <input
        {...restProps}
        ref={el => (this.inputRef = el)}
        onBlur={this.onInputBlur}
        onFocus={this.onInputFocus}
        onClick={this.onClick}
      />
    );
  }
}

export default Input;
