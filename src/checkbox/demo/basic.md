---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Checkbox} from '@jdcfe/yep-react';
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Checkbox>选项</Checkbox>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
