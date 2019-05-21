---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {List} from '@jdcfe/yep-react';
const {Item} = List;

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <List renderHeader={() => '头部'}>
          <Item extra={'白条随机立减最高99'}>标题</Item>
          <Item extra={'白条随机立减最高99'}>标题</Item>
          <Item extra={'白条随机立减最高99'}>标题</Item>
          <Item extra={'白条随机立减最高99'}>标题</Item>
        </List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
