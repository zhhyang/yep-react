---
order: 0
title: 常规按钮
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
          type="primary"
          onClick={() => {
            alert('去结算');
          }}
          style={{marginRight: '0.8rem'}}
        >
          去结算
        </JdButton>
        <JdButton type="primary" disabled>
          去结算
        </JdButton>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
