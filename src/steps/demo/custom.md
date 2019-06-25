---
order: 1
title: 自定义图标
description:
---

```js
import React from 'react';
import {Steps} from '@jdcfe/yep-react';
import './demo.css';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Steps
          className="user-defined"
          stepNum={1}
          titles={['step1', 'step2', 'step3']}
          desc={['第一阶梯', '第二阶梯', '第三阶梯']}
          icon={['checkbox', 'circle', 'radio']} // 已完成 未完成 进行中
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
