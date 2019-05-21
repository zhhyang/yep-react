---
order: 3
title: 禁用 当前关闭
description:
---

```js
import React from 'react';
import {Switch} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    checked: false,
  };

  render() {
    return <Switch currentStatus={this.state.checked} disabled />;
  }
}

ReactDOM.render(<Demo />, mountNode);
```
