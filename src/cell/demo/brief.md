---
order: 1
title: 多行
description:
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
          <Item label="已选">iPhone X 经典蓝，1件，可选服务</Item>
        </Cell>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
