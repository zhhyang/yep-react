---
order: 1
title: 多行
description: 通过配置wrap为true可展示多行列表项。
---

```js
import React from 'react';
import {Cell} from '@jdcfe/yep-react';
const {Item} = Cell;
class Demo extends React.PureComponent {
  render() {
    return (
      <div style={{background: '#f2f3f3'}}>
        <Cell>
          <Item label="已选" wrap={true}>
            iPhone X 经典蓝，1件，可选服务 iPhone X 黑色，1件，可选服务
          </Item>
        </Cell>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
