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
    checked1: true,
    checked2: true,
    checked3: false,
  };

  render() {
    return (
      <div>
        <Switch currentStatus={this.state.checked} handleSwitch={checked => this.setState({checked})} />
        <Switch currentStatus={this.state.checked1} handleSwitch={checked => this.setState({checked1: checked})} />
        <Switch currentStatus={this.state.checked2} disabled />
        <Switch currentStatus={this.state.checked3} disabled />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
