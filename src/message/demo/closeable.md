---
order: 1
title: 可关闭
description:
---

```js
import React from 'react';
import {Message} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <Message type="warn" icon closeable>
        为了您的财产安全，不要点击陌生链接、不要向任何人透露银行卡或验证码信息，谨防诈骗！
      </Message>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
