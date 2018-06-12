---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Toast, Button, WhiteSpace} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div title="Radio">
        <Button
          onClick={() => {
            Toast.show('This is a toast tips !!!');
          }}
        >
          显示
        </Button>
        <WhiteSpace />
        <Button
          onClick={() => {
            Toast.fail('失败');
          }}
        >
          显示 fail
        </Button>
        <WhiteSpace />
        <Button
          onClick={() => {
            Toast.success('成功');
          }}
        >
          显示 success
        </Button>
        <WhiteSpace />
        <Button
          onClick={() => {
            Toast.loading('加载中...', 10);
          }}
        >
          显示loading
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
