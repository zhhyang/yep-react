---
order: 3
title: loading
description:
---

```js
import React from 'react';
import {Toast, Button} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <Button
        onClick={() => {
          Toast.loading('加载中...', 10);
        }}
      >
        显示loading
      </Button>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
