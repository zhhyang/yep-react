---
order: 4
title: 无图标
description: 列表项右侧不可配置图标。
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
          <Item label="重量" icon={false}>
            0.46kg
          </Item>
        </Cell>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
