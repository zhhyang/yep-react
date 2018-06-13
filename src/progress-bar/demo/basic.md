---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {ProgressBar, WhiteSpace, Button} from '@jdcfe/yep-react';

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
        <ProgressBar percent={150} />
        <WhiteSpace />
        <ProgressBar percent={this.state.percent} backgroundColor="#000" />
        <WhiteSpace />
        <ProgressBar percent={60} colorStart="#feaa36" colorEnd="#ff5741" />
        <WhiteSpace />
        <ProgressBar percent={this.state.percent} fixed />
        <Button onClick={this.add}>(+-)10</Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
