---
category: Form
title: 日期选择
desc: 底部弹起的模态框用于选择日期或时间
---

用于选择日期或者时间。

<DEMO>

| 参数          | 说明                                                                               | 类型                               | 默认值      |
| ------------- | ---------------------------------------------------------------------------------- | ---------------------------------- | ----------- |
| mode          | 日期选择的类型, 可以是日期`date`,时间`time`,日期+时间`datetime`,年`year`,月`month` | String                             | `date`      |
| value         | 当前选中时间                                                                       | Date                               | 无          |
| minDate       | 最小可选日期                                                                       | Date                               | 2000-1-1    |
| maxDate       | 最大可选日期                                                                       | Date                               | 2030-1-1    |
| use12Hours    | 12 小时制                                                                          | Boolean                            | false       |
| minuteStep    | 分钟数递增步长设置                                                                 | Number                             | 1           |
| disabled      | 是否不可用                                                                         | Boolean                            | false       |
| onChange      | 时间发生变化的回调函数                                                             | (date: Object): void               | -           |
| onValueChange | 每列 picker 改变时的回调                                                           | (vals: any, index: number) => void | -           |
| title         | 弹框的标题                                                                         | string/React.ReactElement          | 无          |
| prefixCls     | class 前缀                                                                         | string                             | `am-picker` |
| className     | 样式类名                                                                           | string                             | -           |
| onOk          | 点击选中时执行的回调                                                               | (val): void                        | 无          |
| onCancel      | 点击取消时执行的回调                                                               | (): void                           | 无          |

注意：日期字符串在不同浏览器有不同的实现，例如 `new Date('2017-1-1')` 在 Safari 上是 Invalid Date，而在 Chrome 上是能正常解析的。
