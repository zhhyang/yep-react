---
order: 1
title: 自定义渲染组件
description:
---

```js
import React from 'react';
import {CountDown, WhiteSpace} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <p>使用dayStr, hourStr, minuteStr, secondStr字段</p>
        <CountDown
          leftTime={100000}
          renderText={({dayStr, hourStr, minuteStr, secondStr}) => (
            <p>
              倒计时剩余： {dayStr}天{hourStr}小时{minuteStr}分钟{secondStr}秒
            </p>
          )}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
