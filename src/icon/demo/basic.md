---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    const icons = ['close', 'bell', 'cart', 'more', 'close_o', 'check', 'circle', 'radio', 'checkbox', 'up'];

    return (
      <div>
        <div className="iconContainer">
          {icons.map(icon => (
            <div className="iconItem">
              <Icon type={icon} key={icon} color={'#d1371d'} className="iconStyle" />
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
