---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Radio, Toast} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

class Demo extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      options1: ['男', '女'],
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
        <ComponentCard title="基础用法">
          <Radio options={this.state.options1} name="eat" onChange={value => Toast.show('选择了' + value)} />
        </ComponentCard>
        <ComponentCard title="禁用">
          <Radio options={this.state.options2} horizontal onChange={value => Toast.show('选择了' + value)} />
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
