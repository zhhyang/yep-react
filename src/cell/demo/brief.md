---
order: 2
title: 辅助说明
description: 列表内容下方可配置辅助说明。
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
          <Item label="白条">
            白条随机立减最高99 每个用户限用1次<Brief>现货，11：00前下单，预计今日送达</Brief>
          </Item>
        </Cell>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
