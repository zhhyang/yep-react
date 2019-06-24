---
order: 6
title: 商品属性选择
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
          type="checked"
          circle
          size="sm"
          onClick={() => {
            alert('京东快递');
          }}
          style={{marginRight: '0.36rem'}}
        >
          象牙白
        </Button>
        <Button
          circle
          type="fill"
          size="sm"
          onClick={() => {
            alert('ghost');
          }}
          style={{marginRight: '0.36rem'}}
        >
          皓月灰
        </Button>
        <Button
          type="dashed"
          circle
          size="sm"
          onClick={() => {
            alert('ghost');
          }}
        >
          晶钻蓝
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
