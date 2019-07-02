---
order: 0
title: 基础用法
description: 基础用法传入剩余时间 渲染倒计时组件
---

```js
import React from 'react';
import {CountDown} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <CountDown leftTime={100000} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
