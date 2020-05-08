---
order: 2
title: success
description:
---

```js
import React from 'react';
import {Toast, Button} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <>
        <Button
          onClick={() => {
            Toast.success('成功', 10);
          }}
        >
          显示 success
        </Button>
        <Button
          onClick={() => {
            Toast.hide();
          }}
        >
          关闭
        </Button>
      </>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
