---
order: 0
title: 基础用法
description: 
---

```js
import React from 'react';
import {Radio} from "@jdcfe/lrc-m";

class Demo extends React.PureComponent {

  constructor() {
    super()

    this.state = {
      options1: ['Option1', 'Option2'],
      options2: [{
        label: 'Option1',
        value: '1'
      }, {
        label: 'Option2',
        value: '2',
        disabled: true,
      }, {
        label: 'Option3',
        value: '3',
      }]
    }
  }

  render() {
    return (
      <div title="Radio">
        <Radio options={this.state.options1} name="eat" />
        <Radio options={this.state.options2} horizontal />
      </div>
    );
  }
}




ReactDOM.render(<Demo/>,  mountNode);

```
