---
order: 1
title: 自定义颜色
description:
---

```js
import React from 'react';
import {Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    const icons = ['close', 'cart', 'more', 'up'];

    return (
      <div>
        <div className="iconContainer">
          {icons.map((icon, index) => (
            <div className="iconItem">
              <Icon type={icon} key={icon} className="iconStyle" color={index > 1 ? '#f0ad4e' : '#588ceb'} />
              <h6 className="iconName">{icon}</h6>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);
```
