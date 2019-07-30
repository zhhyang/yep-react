---
order: 0
title: 基础用法
description: 左侧按钮，中间标题，右侧按钮构成一个基础类的导航条。
---

```js
import React from 'react';
import {NavBar, Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <NavBar
        // leftContent="返回"
        rightContent={<Icon type="lego_gengduo" />}
      >
        页面标题
      </NavBar>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
