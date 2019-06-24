---
order: 2
title: 无图标模式
description:
---

```js
import React from 'react';
import {NavBar} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <NavBar leftIcon={null} leftContent="取消" rightContent="操作">
        页面标题
      </NavBar>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
