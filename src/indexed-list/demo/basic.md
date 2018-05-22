---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {IndexedList} from '@jdcfe/lrc-m';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <IndexedList indexedBarStyle={{top: 170}} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
