---
order: 3
title: 文字环绕
description: 列表左侧支持单行或多行的文字排列，右侧可配文本或图标等元素，支持设置不同的对齐方式。
---

```js
import React from 'react';
import {List} from '@jdcfe/yep-react';
const {Item} = List;

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <List renderHeader={() => 'Text Wrapping'} className="my-list">
          <Item data-seed="logId">Single line，long text will be hidden with ellipsis；</Item>
          <Item wrap>
            Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text
          </Item>
          <Item extra="extra content" multipleLine align="top" wrap>
            Multiple line and long text will wrap. Long Text Long Text Long Text
          </Item>
          <Item extra="extra content" arrow="empty" className="spe" wrap>
            In rare cases, the text of right side will wrap in the single line with long text. long text long text long
            text
          </Item>
        </List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
