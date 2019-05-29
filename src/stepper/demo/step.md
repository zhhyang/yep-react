---
order: 3
title: 自定义步进值 step 为 3
description:
---

```js
import React from 'react';
import {Stepper, Toast} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Stepper onChange={n => console.log(n)} step={3} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
