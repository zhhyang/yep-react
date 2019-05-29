---
order: 4
title: 禁用手动输入
description:
---

```js
import React from 'react';
import {Stepper, Toast} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Stepper onChange={n => console.log(n)} readonly />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
