---
order: 2
title: 禁用 当前开启
description:
---

```js
import React from 'react';
import {Switch} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    checked: true,
  };

  render() {
    return <Switch currentStatus={this.state.checked} disabled />;
  }
}

ReactDOM.render(<Demo />, mountNode);
```
