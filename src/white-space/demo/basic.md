---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {WhiteSpace} from '@jdcfe/yep-react';

const PlaceHolder = ({className = '', ...restProps}) => (
  <div className={`${className} placeholder`} {...restProps}>
    Block
  </div>
);

ReactDOM.render(<PlaceHolder />, mountNode);
```
