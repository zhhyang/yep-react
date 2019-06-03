---
order: 3
title: 最多购买 10 件
description:
---

```js
import React from 'react';
import {Stepper, Toast} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    max: 10,
    min: 1,
    value: 1,
  };
  render() {
    const props = {
      ...this.state,
      onChange: value => this.setState({value}),
      onGreat: () => Toast.show(`最多购买 ${this.state.max} 件!`),
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
