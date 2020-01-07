---
order: 0
title: 基础用法
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
          Toast.show('这是一个特别特别特别特别特别长的提示!!!');
        }}
      >
        显示
      </Button>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
