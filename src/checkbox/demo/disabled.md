---
order: 1
title: 禁用
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
        <Checkbox disabled>选项</Checkbox>
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
