---
order: 0
title: 基础用法
description: 
---


```js
import React from 'react';
import { WhiteSpace } from '@jdcfe/lrc-m';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

const WhiteSpaceExample = () => (
  <div>
    <WhiteSpace size="xs" />
    <PlaceHolder />

    <WhiteSpace size="sm" />
    <PlaceHolder />

    <WhiteSpace />
    <PlaceHolder />

    <WhiteSpace size="lg" />
    <PlaceHolder />

    <WhiteSpace size="xl" />
    <PlaceHolder />
  </div>
);

ReactDOM.render(<WhiteSpaceExample />, mountNode);
```

