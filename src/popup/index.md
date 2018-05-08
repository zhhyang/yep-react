---
category: Components
title: 弹出框
---

作为Picker和ActionSheet组件的容器组件实现

<DEMO>


| 参数 | 说明 | 类型 | 默认值
| --------- | --------
| prefixCls | 组件class前缀 | string | Yep-picker
| style | 组件样式 | object | {}
| show | 是否显示 | boolean | false
| onCancel | 点击取消时执行的回调 | func| ()=>{}
| popupTransition | popup弹出动画，默认提供 slide-up、slide-down、slide-right，默认为 slide-up | string | slide-up
| maskTransition | mask层的动画，默认为fade | string | fade
| maskCloseable | 点击蒙层是否关闭 | boolean | true
