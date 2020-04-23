---
order: 1
title: 可关闭通知
description: 通知默认常显，可通过右侧关闭按钮关闭。
---

```js
import React from 'react';
import {Message} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <Message type="error" icon closeable>
        为了您的财产安全，不要点击陌生链接、不要向任何人透露银行卡或验证码信息，谨防诈骗！
      </Message>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
