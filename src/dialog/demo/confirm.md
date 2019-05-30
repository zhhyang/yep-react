---
order: 1
title: 基础用法
description:
---

```js
import React from 'react';
import {Dialog, Button} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <Button
        onClick={() => {
          Dialog.confirm('标题', '确定要删除吗?');
        }}
      >
        Confirm
      </Button>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
