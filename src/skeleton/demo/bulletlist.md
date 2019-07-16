---
order: 4
title: 清单
description: 需求清单，目录等场景
---

```js
import React from 'react';
import {Skeleton} from '@jdcfe/yep-react';
const {BulletListStyle} = Skeleton;

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Skeleton>
          <circle cx="10" cy="20" r="8" />
          <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="50" r="8" />
          <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="80" r="8" />
          <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="110" r="8" />
          <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
        </Skeleton>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);
```
