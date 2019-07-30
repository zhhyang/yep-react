---
order: 1
title: 状态按钮
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
        <Button size="md" style={{backgroundColor: '#2A83E1', color: '#FFFFFF', border: 0}}>
          下一步，上传医师认证相关证书
        </Button>
        <WhiteSpace />
        <Button icon="lego_jiazai">Loading Button</Button>
        <WhiteSpace />
        <Button icon="delete">with icon</Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
