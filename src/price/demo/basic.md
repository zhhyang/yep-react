---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Price} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Price value="$917.00" />
        <Price value="$917.00" symPos="sup" />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
