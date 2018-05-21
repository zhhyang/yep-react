---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {ToTop} from '@jdcfe/lrc-m';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <ToTop className="Yep-to-top" onClick={e => console.log(e)} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
