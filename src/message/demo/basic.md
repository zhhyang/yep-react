---
order: 0
title: 基础用法
description: 通知默认常显。
---

```js
import React from 'react';
import {Message} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return <Message icon>电话号码无效</Message>;
  }
}

ReactDOM.render(<Demo />, mountNode);
```
