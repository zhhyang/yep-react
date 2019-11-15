---
order: 1
title: 自定义背景色
description: 可通过配置backgroundColor自定义进度条背景色
---

```js
import React from 'react';
import {ProgressBar} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div title="ProgressBar">
        <ProgressBar percent={60} backgroundColor="#000" />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
