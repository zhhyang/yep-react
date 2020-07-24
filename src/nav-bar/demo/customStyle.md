---
order: 5
title: 自定义样式
description: 内置默认为白色，所有样式可自定义。
---

```js
import React from 'react';
import {NavBar, Icon} from '@jdcfe/yep-react';
import {MoreOutlined} from '@jdcfe/icons-react';
class Demo extends React.PureComponent {
  render() {
    return (
      <NavBar className={'custom-nav-bar'} rightContent={<MoreOutlined />}>
        页面标题
      </NavBar>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
