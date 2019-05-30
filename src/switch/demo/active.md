---
order: 1
title: 默认开启
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
    return <Switch currentStatus={this.state.checked} handleSwitch={checked => this.setState({checked: checked})} />;
  }
}

ReactDOM.render(<Demo />, mountNode);
```
