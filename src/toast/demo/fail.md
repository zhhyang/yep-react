---
order: 1
title: fail
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
          Toast.fail('失败');
        }}
      >
        显示 fail
      </Button>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
