---
order: 2
title: 最少 5 件起购
description: 低于最小值提示
---

```js
import React from 'react';
import {Stepper, Toast} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    max: 10,
    min: 5,
    value: 5,
  };
  render() {
    const props = {
      ...this.state,
      onChange: value => this.setState({value}),
      onLess: () => Toast.show(`最少 ${this.state.min} 件起购!`),
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
