---
order: 2
title: 背景色渐变
description: 可通过配置colorStart与colorEnd给进度条添加渐变色
---

```js
import React from 'react';
import {ProgressBar} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div title="ProgressBar">
        <ProgressBar percent={80} colorStart="#feaa36" colorEnd="#ff5741" />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
