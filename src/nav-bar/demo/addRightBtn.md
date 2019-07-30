---
order: 2
title: 增加右侧按钮
description: 通过配置share增加右侧图标。
---

```js
import React from 'react';
import {NavBar, Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <NavBar share={<Icon type="lego_fenxiang" size={'xs'} />} rightContent={<Icon type="lego_gengduo" />}>
        页面标题
      </NavBar>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
