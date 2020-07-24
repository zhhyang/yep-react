---
order: 2
title: 尺寸
description:
---

```js
import React from 'react';
import CircleOutlined from '@jdcfe/icons-react/CircleOutlined';
const Demo = () => (
  <div className="iconContainer">
    <div className="iconItem">
      <CircleOutlined className="Yep-icon-lg" />
      <h6 className="iconName">lg</h6>
    </div>
    <div className="iconItem">
      <CircleOutlined className="Yep-icon-md" />
      <h6 className="iconName">md</h6>
    </div>
    <div className="iconItem">
      <CircleOutlined className="Yep-icon-sm" />
      <h6 className="iconName">sm</h6>
    </div>
    <div className="iconItem">
      <CircleOutlined className="Yep-icon-xs" />
      <h6 className="iconName">xs</h6>
    </div>
    <div className="iconItem">
      <CircleOutlined className="Yep-icon-xxs" />
      <h6 className="iconName">xxs</h6>
    </div>
  </div>
);
ReactDOM.render(<Demo />, mountNode);
```
