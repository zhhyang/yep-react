---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Scratch} from '@jdcfe/lrc-m';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Scratch
          scratchImgUrl={
            'http://img13.360buyimg.com/uba/jfs/t18799/156/2627259082/17162/d0d22282/5b027b37N5b0fa969.png'
          }
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
