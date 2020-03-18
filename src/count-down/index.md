---
category: View
title: 倒计时
desc: 倒计时组件
---

倒计时组件

<DEMO>

| 参数      | 说明                                                         | 类型     | 默认值         |
| --------- | ------------------------------------------------------------ | -------- | -------------- |
| prefixCls | 组件 class 前缀                                              | string   | Yep-count-down |
| style     | 组件样式                                                     | object   | {}             |
| className | 组件额外样式                                                 | string   | -              |
| leftTime  | 需要倒计时的时间，单位为秒。如果不是整数，会按照四舍五入取整 | number   | -              |
| onEnd     | 倒计时结束时的回调函数                                       | function | () => null     |
| overText  | 倒计时结束后展示文案。                                       | string   | 活动结束       |

## children props

| 参数      | 说明                               | 类型   | 默认值 |
| --------- | ---------------------------------- | ------ | ------ |
| dayStr    | 剩余天数                           | string | -      |
| hourStr   | 剩余小时数(不足 10,自动在左侧加 0) | string | -      |
| minuteStr | 剩余分钟数(不足 10,自动在左侧加 0) | string | -      |
| secondStr | 剩余秒数(不足 10,自动在左侧加 0)   | string | -      |
| dayNum    | 剩余天数                           | number | 0      |
| hourNum   | 剩余小时数                         | number | 0      |
| minuteNum | 剩余分钟数                         | number | 0      |
| secondNum | 剩余秒数。                         | number | 0      |
