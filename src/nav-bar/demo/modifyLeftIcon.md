---
order: 3
title: 更改左侧图标
description: 通过将leftIcon置为null以及配置leftContent修改左侧图标。
---

```js
import React from 'react';
import {NavBar, Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <NavBar leftIcon={null} leftContent="返回" rightContent={<Icon type="lego_gengduo" />}>
        页面标题
      </NavBar>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
