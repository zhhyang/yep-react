---
order: 0
title: 基础用法
description: 回到顶部按钮支持自定义样式，通过设置displayHeight值配置按钮展示时页面滚动距离，支持传入回调函数。
---

```js
import React from 'react';
import {ToTop} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <p className="totop-demo-p">滚动至页面底部，查看右下角返回顶部按钮</p>
        <p className="totop-demo-p">滚动至页面底部，查看右下角返回顶部按钮</p>
        <p className="totop-demo-p">滚动至页面底部，查看右下角返回顶部按钮</p>
        <p className="totop-demo-p">滚动至页面底部，查看右下角返回顶部按钮</p>
        <p className="totop-demo-p">滚动至页面底部，查看右下角返回顶部按钮</p>
        <p className="totop-demo-p">滚动至页面底部，查看右下角返回顶部按钮</p>
        <p className="totop-demo-p">滚动至页面底部，查看右下角返回顶部按钮</p>
        <ToTop displayHeight={100} onClick={e => console.log(e)} visible />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
