---
order: 0
title: 基础用法
description: 
---

```js
import React, {PureComponent} from 'react'
import {Switch} from "@jdcfe/lrc-m"

class Demo extends PureComponent {

  render() {
    return (
      <div>
        <Switch currentStatus={false}/>
        <Switch currentStatus/>
        <Switch currentStatus disabled/>
        <Switch currentStatus={false} disabled/>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>,  mountNode);

```
