---
order: 2
title: inline / small 按钮
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Button, WhiteSpace} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Button size="sm" inline type="primary">
          small
        </Button>
        <Button size="sm" inline>
          small
        </Button>
        <WhiteSpace />
        <Button inline>inline</Button>
        <WhiteSpace />
        <Button submit>Submit</Button>
        <WhiteSpace />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
