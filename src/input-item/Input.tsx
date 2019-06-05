import * as React from 'react';
import {InputEventHandler} from './types';
import {Omit} from '../_utils/types';

export type HTMLInputElementProps = Omit<React.HTMLProps<HTMLInputElement>, 'onFocus' | 'onBlur'>;

export interface InputProps extends HTMLInputElementProps {
  onFocus?: InputEventHandler;
  onBlur?: InputEventHandler;
}

class Input extends React.PureComponent<InputProps> {
  inputRef: HTMLInputElement;

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

  onClick = (e: any) => {
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
        ref={(el: HTMLInputElement) => (this.inputRef = el)}
        onBlur={this.onInputBlur}
        onFocus={this.onInputFocus}
        onClick={this.onClick}
      />
    );
  }
}

export default Input;
