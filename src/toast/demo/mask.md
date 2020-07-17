---
order: 4
title: mask
description:
---

```js
import React from 'react';
import {Toast, Button} from '@jdcfe/yep-react';
//Toast.config({mask: false});
class Demo extends React.PureComponent {
  render() {
    return (
      <Button
        onClick={() => {
          Toast.loading('加载中...', 10);
        }}
      >
        显示透明遮罩层
      </Button>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
