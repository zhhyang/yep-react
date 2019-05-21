---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Radio, Toast} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      options1: ['男', '女'],
    };
  }

  render() {
    return (
      <div title="Radio">
        <Radio options={this.state.options1} name="eat" onChange={value => Toast.show('选择了' + value)} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
