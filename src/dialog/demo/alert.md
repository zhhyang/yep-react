---
order: 3
title: 基础用法
description:
---

```js
import React from 'react';
import {Dialog, Button} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    const obj = {
      className: '123',
    };
    return (
      <div title="Dialog">
        <Button
          onClick={() => {
            Dialog.confirm('标题', '确定要删除吗?', [{text: '好的', onClick: () => console.log('好的')}], obj);
          }}
        >
          Alert
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
