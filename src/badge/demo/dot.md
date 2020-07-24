---
order: 3
title: 小红点
description: 除字符形式，徽标也可以是小红点
---

```js
import React from 'react';
import {Badge} from '@jdcfe/yep-react';
import DongdongOutlined from '@jdcfe/icons-react/DongdongOutlined';
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Badge dot>
          <DongdongOutlined className="Yep-icon-md" />
        </Badge>
        <div className="badge-text">有未读消息</div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
