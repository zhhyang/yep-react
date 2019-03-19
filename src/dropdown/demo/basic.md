---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Dropdown} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <ComponentCard title="基础用法">
          <Dropdown overlay={'这是一个下拉框'}>
            <button>Open</button>
          </Dropdown>
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
