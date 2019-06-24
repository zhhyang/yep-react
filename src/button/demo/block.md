---
order: 3
title: 通栏按钮
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
        <Button type="primary" block>
          登录
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
