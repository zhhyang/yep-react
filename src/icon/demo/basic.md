---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import * as IconComponents from '@jdcfe/icons-react/es/icons';
console.log(IconComponents);
const Demo = () => (
  <div>
    <div className="iconContainer">
      {Object.keys(IconComponents).map(iconName => {
        const Component = IconComponents[iconName];
        return <Component style={{fontSize: '24px'}} key={iconName} />;
      })}
    </div>
  </div>
);
ReactDOM.render(<Demo />, mountNode);
```
