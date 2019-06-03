---
order: 5
title: 自定义按钮
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
      buttonAdd: <div>加</div>,
      buttonReduce: <div>减</div>,
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
