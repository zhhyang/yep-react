---
order: 9
title: 带Icon按钮
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
        <Button icon="lego_jiazai" circle size="sm" style={{marginRight: '0.36rem'}}>
          Loading
        </Button>
        <Button type="ghost" icon="delete" circle size="sm">
          快速清理
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
