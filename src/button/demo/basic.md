---
order: 0
title: 基础用法
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
        <Button
          onClick={() => {
            alert('default');
          }}
        >
          default
        </Button>
        <WhiteSpace />
        <Button disabled>default disabled</Button>
        <WhiteSpace />
        <Button
          type="primary"
          onClick={() => {
            alert('primary');
          }}
        >
          primary
        </Button>
        <WhiteSpace />
        <Button type="primary" disabled>
          primary disabled
        </Button>
        <WhiteSpace />
        <Button
          type="ghost"
          onClick={() => {
            alert('ghost');
          }}
        >
          ghost
        </Button>
        <WhiteSpace />
        <Button
          type="ghost"
          disabled
          onClick={() => {
            alert('ghost');
          }}
        >
          ghost disabled
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
