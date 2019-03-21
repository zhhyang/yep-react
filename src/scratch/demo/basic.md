---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Scratch} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <ComponentCard title="基础用法">
          <Scratch
            scratchImgUrl={
              'http://img13.360buyimg.com/uba/jfs/t18799/156/2627259082/17162/d0d22282/5b027b37N5b0fa969.png'
            }
            resPercent={50}
            resCallback={() => {
              alert('中奖了！！！');
            }}
            children={<div className="scratch-child">中奖了</div>}
          />
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
