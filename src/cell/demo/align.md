---
order: 3
title: 对齐方式
description: 通过配置align属性可设置右侧图标和列表项的对齐方式。
---

```js
import React from 'react';
import {Cell} from '@jdcfe/yep-react';
const {Item, Brief} = Cell;
class Demo extends React.PureComponent {
  render() {
    return (
      <div style={{background: '#f2f3f3'}}>
        <Cell>
          <Item label="白条" align="top">
            白条随机立减最高99 每个用户限用1次<Brief>现货，11：00前下单，预计今日送达</Brief>{' '}
          </Item>
        </Cell>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
