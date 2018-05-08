---
order: 0
title: 基础用法
description: 
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Checkbox} from "@jdcfe/lrc-m";
class Demo extends React.PureComponent {

  render() {
    return (
      <div>
        <Checkbox >鱼</Checkbox>
         <Checkbox disabled>肉</Checkbox>
         <Checkbox defaultChecked>小龙虾</Checkbox>
         <Checkbox checked>哈啤酒</Checkbox>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>,  mountNode);

```
