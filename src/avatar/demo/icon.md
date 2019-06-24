---
order: 3
title: 图标
description:
---

```js
import React from 'react';
import {Avatar, Icon} from '@jdcfe/yep-react';

import './demo.css';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Avatar icon="star" />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
