---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Switch} from '@jdcfe/lrc-m';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Switch currentStatus={false} />
        <Switch currentStatus />
        <Switch currentStatus disabled />
        <Switch currentStatus={false} disabled />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
