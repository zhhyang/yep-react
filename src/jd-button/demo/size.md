---
order: 1
title: 常规按钮(小尺寸)
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {JdButton} from '@jdcfe/yep-react';
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <JdButton
          size="sm"
          type="primary"
          onClick={() => {
            alert('去结算');
          }}
          style={{marginRight: '0.8rem'}}
        >
          去结算
        </JdButton>
        <JdButton type="primary" size="sm" disabled>
          去结算
        </JdButton>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
