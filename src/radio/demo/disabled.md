---
order: 1
title: 禁用
description:
---

```js
import React from 'react';
import {Radio, Toast} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      options2: [
        {
          label: '男',
          value: '1',
        },
        {
          label: '女',
          value: '2',
          disabled: true,
        },
        {
          label: '未知',
          value: '3',
        },
      ],
    };
  }

  render() {
    return (
      <div title="Radio">
        <Radio options={this.state.options2} horizontal onChange={value => Toast.show('选择了' + value)} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
