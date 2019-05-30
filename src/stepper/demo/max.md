---
order: 2
title: 最多购买10件
description:
---

```js
import React from 'react';
import {Stepper, Toast} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    const max = 10;
    return (
      <div>
        <Stepper
          max={max}
          onChange={n => console.log(n)}
          onGreat={() => {
            Toast.show(`最多只能买${max}件哦!`);
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
