---
order: 2
title: 明文密码
description:
---

```js
import React from 'react';
import {PasswordInput, NumberKeyboard} from '@jdcfe/yep-react';
import './demo.css';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      valueName: 'defaultValue',
      defaultValue: '952',
      keyboardStatus: false,
      passwordLength: 6,
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
          className="custom-password-input"
          value={defaultValue}
          mask={false}
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
