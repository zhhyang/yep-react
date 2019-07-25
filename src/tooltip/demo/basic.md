---
order: 0
title: 默认依附在下方
description:
---

```js
import React from 'react';
import {ToolTip} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      txt: 'Open',
    };
  }
  render() {
    const {txt} = this.state;
    return (
      <div>
        <ToolTip overlay={'这是一个提示框'}>
          <button>{txt}</button>
        </ToolTip>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
