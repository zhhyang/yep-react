---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {InputItem, List} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <List>
          <InputItem placeholder={'111'} defaultValue="123" clear extra={<Icon type={'tip'} />}>
            姓名
          </InputItem>
        </List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
