---
order: 4
title: 圆角按钮-常规
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
        <JdButton
          circle
          size="sm"
          onClick={() => {
            alert('ghost');
          }}
        >
          确认收货
        </JdButton>
        <JdButton
          type="ghost"
          circle
          size="sm"
          onClick={() => {
            alert('ghost');
          }}
        >
          再次购买
        </JdButton>
        <JdButton
          type="fill"
          circle
          size="sm"
          onClick={() => {
            alert('ghost');
          }}
        >
          查看物流
        </JdButton>
        <JdButton
          type="light"
          circle
          size="sm"
          onClick={() => {
            alert('ghost');
          }}
        >
          降价通知
        </JdButton>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
