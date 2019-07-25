---
order: 3
title: 底部通知
description: 通知在页面底部展示，可通过回调函数控制其显示或隐藏。
---

```js
import React from 'react';
import {Message} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  componentDidMount() {
    this.messageInstance.closeMessage();
  }

  render() {
    const aStyle = {
      display: 'inline-block',
      border: 'solid 1px #eee',
      padding: '10px',
      margin: '10px 10px',
    };
    return (
      <div>
        <Message
          position="fix-bottom"
          ref={message => {
            this.messageInstance = message;
          }}
        >
          底部通知
        </Message>
        <a
          style={aStyle}
          onClick={() => {
            this.messageInstance.showMessage();
          }}
        >
          显示底部通知
        </a>
        <a
          style={aStyle}
          onClick={() => {
            this.messageInstance.closeMessage();
          }}
        >
          关闭底部通知
        </a>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
