---
order: 1
title: 禁用
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
        <Checkbox disabled>选项</Checkbox>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
