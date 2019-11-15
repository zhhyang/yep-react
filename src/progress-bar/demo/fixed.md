---
order: 3
title: 顶部固定
description: 可通过配置fixed为true将进度条设置为顶部固定
---

```js
import React from 'react';
import {ProgressBar, Button} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    percent: 50,
  };

  add = () => {
    let p = this.state.percent + 10;
    if (this.state.percent >= 100) {
      p = 0;
    }
    this.setState({percent: p});
  };

  render() {
    return (
      <div title="ProgressBar">
        <ProgressBar percent={this.state.percent} fixed />
        <Button onClick={this.add}>顶部进度条加10%</Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
