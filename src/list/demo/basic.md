---
order: 0
title: 基础用法
description: 左侧是标题，右侧可配置文本、图标等元素。
---

```js
import React from 'react';
import {List} from '@jdcfe/yep-react';
const {Item} = List;

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <List renderHeader={() => 'Basic Style'}>
          <Item extra={'extra content'}>Title</Item>
          <Item icon={'arrow-right'}>Title</Item>
        </List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
