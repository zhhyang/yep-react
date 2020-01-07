---
order: 7
title: 带Icon按钮
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {JdButton} from '@jdcfe/yep-react';
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <JdButton type="ghost" icon="lego_jiazai" circle size="sm" style={{marginRight: '0.36rem'}}>
          Loading
        </JdButton>
        <JdButton type="ghost" icon="delete" circle size="sm">
          快速清理
        </JdButton>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
