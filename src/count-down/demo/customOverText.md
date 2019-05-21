---
order: 2
title: 自定义结束文案、结束回调
description:
---

```js
import React from 'react';
import {CountDown, Toast} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <CountDown leftTime={5} overText="活动已结束" onEnd={() => Toast.show('活动结束了')} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
