---
order: 2
title: 包含左侧图标
description: 标题左侧可配置图标。
---

```js
import React from 'react';
import {List} from '@jdcfe/yep-react';
const {Item} = List;

class Demo extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <List renderHeader={() => 'Icon in the left'}>
          <Item
            thumb="//img14.360buyimg.com/jdphoto/jfs/t14269/206/1377464630/417/1601d619/5a4dd753N5a33ba54.png!q70.webp"
            onClick={() => {}}
            icon={'arrow-right'}
          >
            Title
          </Item>
          <Item
            thumb="//img13.360buyimg.com/uba/jfs/t23977/282/1022509367/2839/74d4afce/5b4dad41N005d5914.png"
            onClick={() => {}}
            icon={'arrow-right'}
          >
            Title
          </Item>
        </List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
