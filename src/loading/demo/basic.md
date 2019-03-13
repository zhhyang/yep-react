---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Loading} from '@jdcfe/yep-react';

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
