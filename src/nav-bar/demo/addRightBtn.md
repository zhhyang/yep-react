---
order: 2
title: 增加右侧按钮
description: 通过配置share增加右侧图标。
---

```js
import React from 'react';
import {NavBar, Icon} from '@jdcfe/yep-react';
import {ShareOutlined, MoreOutlined} from '@jdcfe/icons-react';
class Demo extends React.PureComponent {
  render() {
    return (
      <NavBar share={<ShareOutlined className="Yep-icon-xs" />} rightContent={<MoreOutlined />}>
        页面标题
      </NavBar>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
