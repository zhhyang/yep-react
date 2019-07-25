---
order: 1
title: 增加左侧按钮
description: 通过设置close为true以及配置closeContent增加左侧图标。
---

```js
import React from 'react';
import {NavBar, Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <NavBar close closeContent={<Icon type="close" size="xs" />} rightContent={<Icon type="lego_gengduo" />}>
        页面标题
      </NavBar>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
