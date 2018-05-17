---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {ProgressBar, WhiteSpace} from '@jdcfe/lrc-m';

class Demo extends React.PureComponent {
  render() {
    return (
      <div title="ProgressBar">
        <ProgressBar percent={150} />
        <WhiteSpace />
        <ProgressBar percent={50} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
