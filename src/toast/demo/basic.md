---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Toast, Button, WhiteSpace} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

class Demo extends React.PureComponent {
  render() {
    return (
      <div title="Radio">
        <ComponentCard title="基础用法">
          <Button
            onClick={() => {
              Toast.show('This is a toast tips !!!');
            }}
          >
            显示
          </Button>
        </ComponentCard>
        <ComponentCard title="fail">
          <Button
            onClick={() => {
              Toast.fail('失败');
            }}
          >
            显示 fail
          </Button>
        </ComponentCard>
        <ComponentCard title="success">
          <Button
            onClick={() => {
              Toast.success('成功');
            }}
          >
            显示 success
          </Button>
        </ComponentCard>
        <ComponentCard title="loading">
          <Button
            onClick={() => {
              Toast.loading('加载中...', 10);
            }}
          >
            显示loading
          </Button>
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
