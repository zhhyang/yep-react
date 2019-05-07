---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Steps} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Steps
          stepNum={2}
          titles={['step-one', 'step-two', 'step-three']}
          desc={['step_one_text', 'step_two_text', 'step_three_text']}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
