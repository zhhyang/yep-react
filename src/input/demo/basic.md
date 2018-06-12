---
order: 0
title: 基础用法
description: 
---

```js
import React from 'react';
import {Input} from "@jdcfe/yep-react";

class Demo extends React.PureComponent {

  render() {
    return (
      <div>
      <Input clearable={true} placeholder={'111'}/>
    </div>
    );
  }
}

ReactDOM.render(<Demo/>,  mountNode);

```
    
