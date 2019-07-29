---
order: 2
title: 顶部通知
description: 通知在页面顶部展示，可通过设置duration参数控制显示的时长，也可通过右侧关闭按钮关闭通知。
---

```js
import React from 'react';
import {Message} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    duration: 0,
    show: false,
  };

  disappearedNotice() {
    this.setState({
      duration: 3000,
      show: true,
    });
  }

  render() {
    const aStyle = {
      display: 'inline-block',
      border: 'solid 1px #eee',
      padding: '10px',
      margin: '10px 10px',
    };

    const {duration, show} = this.state;
    return (
      <div>
        <a style={aStyle} onClick={() => this.disappearedNotice()}>
          3秒后消失的顶部通知
        </a>
        {show && (
          <Message
            type="error"
            duration={duration}
            closeable
            position="fix-top"
            ref={message => (this.messageInstance = message)}
          >
            顶部通知，3秒后消失
          </Message>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
