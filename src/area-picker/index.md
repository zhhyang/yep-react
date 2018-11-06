---
category: Components
title: 主站地区选择组件
---

主站地区选择组件

<DEMO>

| 参数          | 说明                                         | 类型                                                               | 默认值          | 必填  |
| ------------- | -------------------------------------------- | ------------------------------------------------------------------ | --------------- | ----- |
| prefixCls     | 组件 class 前缀                              | string                                                             | Yep-area-picker | false |
| style         | 组件样式                                     | object                                                             | {}              | false |
| className     | 组件额外样式                                 | string                                                             | -               | false |
| maskCloseable | 点击遮罩层是否收起                           | boolean                                                            | false           | false |
| title         | 顶部标题                                     | string                                                             | `配送至`        | false |
| initialData   | 顶层数据                                     | `array[{id:number,name:string}]`                                   | -               | true  |
| onOk          | 选中最后一级数据时执行的回调                 | func                                                               | -               | true  |
| onCancel      | 点击关闭按钮时执行的回调                     | func                                                               | -               | true  |
| fetchAction   | 获取二三四级数据接口的回调，必须返回 Promise | `func (city:{id,name,...},index:选中数据的层级(0,1,2)) => promise` | -               | true  |
