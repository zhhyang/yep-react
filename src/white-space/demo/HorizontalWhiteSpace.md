---
order: 1
title: 左右留白
description: 给元素添加水平留白
---

```js
import React from 'react';
import {WhiteSpace} from '@jdcfe/yep-react';

const {HorizontalWhiteSpace} = WhiteSpace;

const PlaceHolder = ({className = '', ...restProps}) => (
  <div className={`${className} placeholder-horizontal`} {...restProps}>
    Block
  </div>
);

class Demo extends React.PureComponent {
  render() {
    return (
      <div className={'placeholder-horizontal-wrap'}>
        <PlaceHolder />
        <HorizontalWhiteSpace />
        <PlaceHolder />
        <HorizontalWhiteSpace />
        <PlaceHolder />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
