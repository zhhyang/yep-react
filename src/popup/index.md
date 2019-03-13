---
category: Basic
title: 弹出框
---

作为 Picker 和 ActionSheet 组件的容器组件实现

<DEMO>

| 参数            | 说明                                                                        | 类型    | 默认值     |
| --------------- | --------------------------------------------------------------------------- | ------- | ---------- |
| prefixCls       | 组件 class 前缀                                                             | string  | Yep-picker |
| style           | 组件样式                                                                    | object  | {}         |
| show            | 是否显示                                                                    | boolean | false      |
| onCancel        | 点击取消时执行的回调                                                        | func    | ()=>{}     |
| popupTransition | popup 弹出动画，默认提供 slide-up、slide-down、slide-right，默认为 slide-up | string  | slide-up   |
| maskTransition  | mask 层的动画，默认为 fade                                                  | string  | fade       |
| maskCloseable   | 点击蒙层是否关闭                                                            | boolean | true       |
