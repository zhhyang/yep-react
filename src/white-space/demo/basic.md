---
order: 0
title: 基础用法
description: 给元素添加上下留白
---

```js
import React from 'react';
import {WhiteSpace} from '@jdcfe/yep-react';

const PlaceHolder = ({className = '', ...restProps}) => (
  <div className={`${className} placeholder`} {...restProps}>
    Block
  </div>
);

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <PlaceHolder />
        <WhiteSpace />
        <PlaceHolder />
        <WhiteSpace />
        <PlaceHolder />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
