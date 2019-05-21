---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {NavBar, Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <NavBar leftContent="返回" rightContent={<Icon type="lego_gengduo" />}>
        页面标题
      </NavBar>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
