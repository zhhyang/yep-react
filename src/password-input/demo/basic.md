---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {PasswordInput, NumberKeyboard} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      valueName: 'defaultValue',
      defaultValue: '',
      passwordLength: 6,
      keyboardStatus: false,
    };
  }

  inputValue = value => {
    let oriValue = this.state[this.state.valueName];
    let newValue = oriValue + value;

    this.setState({
      [this.state.valueName]: newValue.length <= this.state.passwordLength ? newValue : oriValue,
    });
  };

  deleteValue = () => {
    let oriValue = this.state[this.state.valueName];

    this.setState({
      [this.state.valueName]: oriValue.substring(0, oriValue.length - 1),
    });
  };

  showKeyboard = () => {
    document.addEventListener('click', this.hideKeyboard);
    this.setState({
      keyboardStatus: true,
    });
  };

  hideKeyboard = () => {
    document.removeEventListener('click', this.hideKeyboard);
    this.setState({
      keyboardStatus: false,
    });
  };

  render() {
    const {defaultValue, passwordLength, keyboardStatus} = this.state;
    return (
      <div>
        <PasswordInput
          value={defaultValue}
          message="默认为 6 位密码"
          length={passwordLength}
          onFocus={name => {
            this.valueName = name;
            this.showKeyboard();
          }}
        />

        <NumberKeyboard
          show={keyboardStatus}
          theme="password"
          input={value => {
            this.inputValue(value);
          }}
          delete={() => {
            this.deleteValue();
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
