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
    const icons = ['cart', 'cart', 'cart', 'cart', 'cart'];

    let size = ['xxs', 'xs', 'sm', 'md', 'lg'];

    return (
      <div className="iconContainer">
        {icons.map((icon, index) => (
          <div className="iconItem">
            <Icon type={icon} key={icon} color="#588ceb" size={size[index]} />
            <h6 className="iconName">{icon}</h6>
          </div>
        ))}
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);
```
