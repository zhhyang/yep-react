---
order: 2
title: 包含左侧图标
description:
---

```js
import React from 'react';
import {List} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';
const {Item, Brief} = List;

class Demo extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      disabled: false,
    };
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
            闲置回收
          </Item>
          <Item
            thumb="//img14.360buyimg.com/jdphoto/jfs/t14269/206/1377464630/417/1601d619/5a4dd753N5a33ba54.png!q70.webp"
            onClick={() => {}}
            icon={'arrow-right'}
          >
            闲置回收
          </Item>
        </List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
