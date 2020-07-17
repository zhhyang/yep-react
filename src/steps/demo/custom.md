---
order: 1
title: 自定义图标
description: 支持定制步骤条图标。
---

```js
import React from 'react';
import {Steps} from '@jdcfe/yep-react';
import {CheckCircleFilled, CircleOutlined, CircleTwoTone} from '@jdcfe/icons-react';
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
          icon={[<CheckCircleFilled />, <CircleOutlined />, <CircleTwoTone />]} // 已完成 未完成 进行中
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
