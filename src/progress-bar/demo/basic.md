---
order: 0
title: 基础用法
description: 
---

```js
import React, {PureComponent} from 'react'
import {ProgressBar} from "@jdcfe/lrc-m"

class Demo extends PureComponent {

  render() {
    return (
      <div title="ProgressBar">
        <ProgressBar percent={150}/>
        <ProgressBar percent={50}/>
      </div>
    );
  }
}




ReactDOM.render(<Demo/>,  mountNode);

```
