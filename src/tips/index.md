---
category: Components
title: 通知
---

弹出通知，包括绝对定位和相对定位，绝对定位直接在视窗顶部底部弹出，相对定位，在组件响应的位置动画弹出

<DEMO>

| 参数      | 说明                                                           | 类型   | 默认值   |
| --------- | -------------------------------------------------------------- | ------ | -------- |
| prefixCls | 组件 class 前缀                                                | string | Yep-tips |
| style     | 组件样式                                                       | object | {}       |
| className | 组件额外样式                                                   | string | -        |
| duration  | 通知显示时长，单位为毫秒，-1 代表一直显示                      | number | -1       |
| tipType   | 通知类型，内置三种：普通 info，警告 warn，错误 error           | string | info     |
| position  | 通知显示位置：顶部 fix-top，底部 fix-bottom，保持不变 in-place | string | in-place |
