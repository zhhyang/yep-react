---
order: 0
title: 基础用法
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
    return <Switch currentStatus={this.state.checked} handleSwitch={checked => this.setState({checked})} />;
  }
}

ReactDOM.render(<Demo />, mountNode);
```
