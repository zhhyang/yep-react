---
category: View
title: 倒计时
desc: 倒计时组件
---

倒计时组件

<DEMO>

| 参数      | 说明                                                         | 类型                 | 默认值                 | 是否必填 |
| --------- | ------------------------------------------------------------ | -------------------- | ---------------------- | -------- |
| prefixCls | 组件 class 前缀                                              | string               | Yep-count-down         | false    |
| style     | 组件样式                                                     | object               | {}                     | false    |
| className | 组件额外样式                                                 | string               | -                      | false    |
| leftTime  | 需要倒计时的时间，单位为秒。如果不是整数，会按照四舍五入取整 | number               | -                      | true     |
| onEnd     | 倒计时结束时的回调函数                                       | function             | () => null             | false    |
| onChange  | 倒计时的回调函数                                             | function             | (value:number) => null | false    |
| overText  | 倒计时结束后展示文案。(默认展示 00:00:00)                    | string               | 默认展示 00:00:00      | false    |
| children  | children props                                               | (props) => ReactNode | -                      | false    |

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

## Tips

对于需要重新刷新剩余时间的场景，这时候需要把倒计时组件当做`受控组件`，`onChange`回调会返回剩余的时间，页面需要接收这个时间`value`，再通过`leftTime`props 传给倒计时组件
可参考示例 4
