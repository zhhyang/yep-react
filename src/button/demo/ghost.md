---
order: 4
title: 圆角按钮-常规
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@jdcfe/yep-react';
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Button
          circle
          size="sm"
          onClick={() => {
            alert('ghost');
          }}
        >
          确认收货
        </Button>
        <Button
          type="ghost"
          circle
          size="sm"
          onClick={() => {
            alert('ghost');
          }}
        >
          再次购买
        </Button>
        <Button
          type="fill"
          circle
          size="sm"
          onClick={() => {
            alert('ghost');
          }}
        >
          查看物流
        </Button>
        <Button
          type="light"
          circle
          size="sm"
          onClick={() => {
            alert('ghost');
          }}
        >
          降价通知
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
