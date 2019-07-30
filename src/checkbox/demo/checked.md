---
order: 3
title: 当前选中
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Checkbox, WhiteSpace} from '@jdcfe/yep-react';
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Checkbox checked>选项</Checkbox>
        <WhiteSpace />
        <Checkbox>选项2</Checkbox>
        <WhiteSpace />
        <Checkbox>选项3</Checkbox>
        <WhiteSpace />
        <Checkbox>选项4</Checkbox>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
