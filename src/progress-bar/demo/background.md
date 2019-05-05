---
order: 1
title: 自定义背景色
description:
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
