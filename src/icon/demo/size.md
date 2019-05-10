---
order: 2
title: 尺寸
description:
---

```js
import React from 'react';
import {Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    const icons = ['close', 'bell', 'cart', 'more', 'close_o', 'check'];

    return (
      <div className="iconContainer">
        {icons.map(icon => (
          <div className="iconItem">
            <Icon type={icon} key={icon} size="xxs" />
            <h6 className="iconName">{icon}</h6>
          </div>
        ))}
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);
```
