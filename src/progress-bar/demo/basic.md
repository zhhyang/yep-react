---
order: 0
title: 基础用法
description:
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
