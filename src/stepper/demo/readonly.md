---
order: 6
title: 禁用手动输入
description: 禁止手动输入数值，仅允许加减按钮操作
---

```js
import React from 'react';
import {Stepper, Toast} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    max: 99,
    min: 1,
    readonly: true,
    value: 1,
  };
  render() {
    const props = {
      ...this.state,
      onChange: value => this.setState({value}),
    };
    return (
      <div>
        <Stepper {...props} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
