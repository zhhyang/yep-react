---
order: 0
title: 基础用法
description: 可通过配置percent设置进度条进度
---

```js
import React from 'react';
import {ProgressBar} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div title="ProgressBar">
        <ProgressBar percent={50} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
