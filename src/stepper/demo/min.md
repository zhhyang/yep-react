---
order: 1
title: 最低2件起购
description:
---

```js
import React from 'react';
import {Stepper} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Stepper min={2} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
