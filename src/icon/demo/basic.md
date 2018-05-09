---
order: 0
title: 基础用法
description: 
---

```js
import React from 'react';
import {Icon} from "@jdcfe/lrc-m";

class Demo extends React.PureComponent {

  render() {
    return (
      <div>
      <Icon type="add-circle"/>
      <Icon type="arrow-down-hollow"/>
      <Icon type="arrow-back "/>
      <Icon type="add"/>
      <Icon type="add-users"/>
      <Icon type="add-user"/>
      <Icon type="arrow-right"/>
      <Icon type="calendar"/>
      <Icon type="calculator"/>
      <Icon type="close"/>
    </div>
    );
  }
}

ReactDOM.render(<Demo/>,  mountNode);

```
