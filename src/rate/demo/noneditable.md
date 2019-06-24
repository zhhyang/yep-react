---
order: 1
title: 不可编辑
description:
---

```js
import React from 'react';
import {Rate} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return <Rate name="rate1" editing={false} starCount={10} value={8} />;
  }
}

ReactDOM.render(<Demo />, mountNode);
```
