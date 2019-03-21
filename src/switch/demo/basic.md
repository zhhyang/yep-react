---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Switch} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

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
        <ComponentCard title="基础用法">
          <Switch currentStatus={this.state.checked} handleSwitch={checked => this.setState({checked})} />
        </ComponentCard>
        <ComponentCard title="默认开启">
          <Switch currentStatus={this.state.checked1} handleSwitch={checked => this.setState({checked1: checked})} />
        </ComponentCard>
        <ComponentCard title="禁用 当前开启">
          <Switch currentStatus={this.state.checked2} disabled />
        </ComponentCard>
        <ComponentCard title="禁用 当前关闭">
          <Switch currentStatus={this.state.checked3} disabled />
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
