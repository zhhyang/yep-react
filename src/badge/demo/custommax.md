---
order: 2
title: 自定义最大数
description: 支持自定义最大数
---

```js
import React from 'react';
import {Badge} from '@jdcfe/yep-react';
import DongdongOutlined from '@jdcfe/icons-react/DongdongOutlined';
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Badge text={77} max={55}>
          <DongdongOutlined className="Yep-icon-lg" />
        </Badge>
        <div className="badge-text">有未读消息</div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
