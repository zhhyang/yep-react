---
order: 1
title: 常规按钮(小尺寸)
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@jdcfe/yep-react';
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Button
          size="sm"
          type="primary"
          onClick={() => {
            alert('去结算');
          }}
          style={{marginRight: '0.8rem'}}
        >
          去结算
        </Button>
        <Button type="primary" size="sm" disabled>
          去结算
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
