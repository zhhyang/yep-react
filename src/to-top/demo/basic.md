---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {ToTop} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <ComponentCard title="基础用法">
          <p className="totop-demo-p">滚动至页面底部，查看右下角返回顶部按钮</p>
          <p className="totop-demo-p">滚动至页面底部，查看右下角返回顶部按钮</p>
          <p className="totop-demo-p">滚动至页面底部，查看右下角返回顶部按钮</p>
          <p className="totop-demo-p">滚动至页面底部，查看右下角返回顶部按钮</p>
          <p className="totop-demo-p">滚动至页面底部，查看右下角返回顶部按钮</p>
          <p className="totop-demo-p">滚动至页面底部，查看右下角返回顶部按钮</p>
          <p className="totop-demo-p">滚动至页面底部，查看右下角返回顶部按钮</p>
          <ToTop onClick={e => console.log(e)} />
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
