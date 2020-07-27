---
order: 0
title: 基础用法
description: 基于 Lottie 实现的京东 7.0 统一 loading 动画。
---

```js
import React from 'react';
import Loading from '@jdcfe/yep-react-loading';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Loading />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
