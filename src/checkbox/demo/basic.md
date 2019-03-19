---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Checkbox} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <ComponentCard title="基础用法">
          <Checkbox>鱼</Checkbox>
        </ComponentCard>
        <ComponentCard title="禁用">
          <Checkbox disabled>肉</Checkbox>
        </ComponentCard>
        <ComponentCard title="默认选中">
          <Checkbox defaultChecked>小龙虾</Checkbox>
        </ComponentCard>
        <ComponentCard title="当前选中">
          <Checkbox checked>哈啤酒</Checkbox>
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
