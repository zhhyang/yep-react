---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {CountDown, WhiteSpace} from '@jdcfe/lrc-m';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <p>使用dayStr, hourStr, minuteStr, secondStr字段</p>
        <CountDown leftTime={100000}>
          {({dayStr, hourStr, minuteStr, secondStr}) => (
            <p>
              倒计时剩余： {dayStr}天{hourStr}小时{minuteStr}分钟{secondStr}秒
            </p>
          )}
        </CountDown>
        <WhiteSpace />
        <p>使用dayNum, hourNum, minuteNum, secondNum字段</p>
        <CountDown leftTime={100000}>
          {({dayNum, hourNum, minuteNum, secondNum}) => (
            <p>
              倒计时剩余： {dayNum}天{hourNum}小时{minuteNum}分钟{secondNum}秒
            </p>
          )}
        </CountDown>
        <WhiteSpace />
        <p>自定义结束文案</p>
        <CountDown leftTime={5} overText="哈哈哈，终于结束啦">
          {({dayNum, hourNum, minuteNum, secondNum}) => (
            <span>
              倒计时剩余： {dayNum}天{hourNum}小时{minuteNum}分钟{secondNum}秒
            </span>
          )}
        </CountDown>
        <WhiteSpace />
        <p>倒计时结束回调</p>
        <CountDown leftTime={15} onEnd={() => console.log('onEnd回调执行啦')}>
          {({dayNum, hourNum, minuteNum, secondNum}) => (
            <span>
              倒计时剩余： {dayNum}天{hourNum}小时{minuteNum}分钟{secondNum}秒
            </span>
          )}
        </CountDown>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
