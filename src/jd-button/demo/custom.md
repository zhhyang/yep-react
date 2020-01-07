---
order: 9
title: 自定义组件
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
        <JdButton style={{width: '100%', background: '#2A83E1', color: '#FFFFFF'}}>
          下一步，上传医师认证相关证书
        </JdButton>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
