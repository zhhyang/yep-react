---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Scratch} from '@jdcfe/lrc-m';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Scratch />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
