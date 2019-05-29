---
order: 5
title: 组件响应 props 变动
description:
---

```js
import React from 'react';
import {Button, Stepper, Toast} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    value: 1,
  };
  handleClick = () => {
    this.setState({
      value: 5,
    });
  };
  render() {
    return (
      <div>
        <Stepper onChange={n => console.log(n)} value={this.state.value} />
        <Button
          type="primary"
          size="sm"
          style={{width: 100, marginTop: 20, marginBottom: 20}}
          onClick={this.handleClick}
        >
          更新Props
        </Button>
        <p>点击 更新 props.value 为 5</p>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
