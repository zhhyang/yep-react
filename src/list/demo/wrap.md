---
order: 3
title: 长文本样式
description:
---

```js
import React from 'react';
import {List} from '@jdcfe/yep-react';
const {Item} = List;

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
        <List renderHeader={() => 'Text Wrapping'} className="my-list">
          <Item data-seed="logId">Single line，long text will be hidden with ellipsis；</Item>
          <Item wrap>
            Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text
          </Item>
          <Item extra="extra content" multipleLine align="top" wrap>
            Multiple line and long text will wrap. Long Text Long Text Long Text
          </Item>
          <Item extra="no arrow" arrow="empty" className="spe" wrap>
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
