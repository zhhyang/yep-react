---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Tips} from '@jdcfe/lrc-m';

class Demo extends React.PureComponent {
  render() {
    const aStyle = {
      display: 'inline-block',
      border: 'solid 1px #eee',
      padding: '10px',
      margin: '10px 10px',
    };
    return (
      <div>
        <Tips tipType="error">电话号码无效</Tips>
        <br />
        <Tips tipType="warn">
          <p>
            <b style={{color: 'red'}}>注意：</b>小心熊出没
          </p>
          <p>光头强要小心啦！</p>
        </Tips>
        <Tips tipType="error" duration={3000} position="fix-top">
          顶部通知，3秒后消失
        </Tips>
        <Tips
          position="fix-bottom"
          ref={tips2 => {
            this.tips2 = tips2;
          }}
        >
          底部通知
        </Tips>
        <a
          style={aStyle}
          onClick={() => {
            this.tips2.showTips();
          }}
        >
          显示底部通知
        </a>
        <a
          style={aStyle}
          onClick={() => {
            this.tips2.closeTips();
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
