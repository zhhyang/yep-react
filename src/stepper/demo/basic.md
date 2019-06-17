---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Stepper} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    max: 99,
    min: 1,
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
