---
order: 2
title: 默认选中
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
        <Checkbox defaultChecked>选项</Checkbox>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
