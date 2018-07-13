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

  render() {
    const {onBlur, onFocus, ...restProps} = this.props;
    return (
      <input ref={el => (this.inputRef = el)} onBlur={this.onInputBlur} onFocus={this.onInputFocus} {...restProps} />
    );
  }
}

export default Input;
