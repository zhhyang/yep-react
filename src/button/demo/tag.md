---
order: 5
title: 圆角按钮-标签
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
          type="primary"
          circle
          size="sm"
          onClick={() => {
            alert('京东快递');
          }}
          style={{marginRight: '0.36rem'}}
        >
          京东快递
        </Button>
        <Button
          circle
          type="lightred"
          size="xxs"
          onClick={() => {
            alert('ghost');
          }}
          style={{marginRight: '0.36rem'}}
        >
          好评 6.6万
        </Button>
        <Button
          type="checked"
          circle
          size="xxs"
          onClick={() => {
            alert('ghost');
          }}
          icon="shop-baocun"
        >
          全部100万
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
