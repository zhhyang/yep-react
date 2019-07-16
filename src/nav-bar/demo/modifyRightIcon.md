---
order: 4
title: 更改右侧图标
description: 通过配置rightContent修改右侧图标。
---

```js
import React from 'react';
import {NavBar, Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return <NavBar rightContent={'更多'}>页面标题</NavBar>;
  }
}

ReactDOM.render(<Demo />, mountNode);
```
