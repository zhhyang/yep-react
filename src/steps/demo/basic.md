---
order: 0
title: 基础用法
description: 支持设置当前步骤索引，可定制步骤条标题和副标题。
---

```js
import React from 'react';
import {Steps} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Steps stepNum={2} titles={['步骤1', '步骤2', '步骤3']} desc={['提交申请', '负责人审核', '通过']} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
