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
      <Button
        onClick={() => {
          Toast.success('成功');
        }}
      >
        显示 success
      </Button>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
