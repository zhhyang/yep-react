---
order: 0
title: 基础用法
description: 简单的徽章展示
---

```js
import React from 'react';
import {Badge} from '@jdcfe/yep-react';
import CartOutlined from '@jdcfe/icons-react/CartOutlined';
const Demo = () => (
  <div>
    <Badge text={8}>
      <CartOutlined className="Yep-icon-md" />
    </Badge>
    <div className="badge-text">待收货</div>
  </div>
);

ReactDOM.render(<Demo />, mountNode);
```
