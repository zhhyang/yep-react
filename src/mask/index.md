---
category: Basic
title: 遮罩层
desc: 全局统一遮罩层，配合模态框组件，遮罩可设置非透明、透明两种。并在遮罩层统一解决 iOS 上滑动穿透的问题
---

<DEMO>

props

| 参数        | 说明                   | 类型    | 默认值   | required |
| ----------- | ---------------------- | ------- | -------- | -------- |
| prefixCls   | 组件 class 前缀        | string  | Yep-mask | false    |
| style       | 组件样式               | object  | {}       | false    |
| className   | 额外要添加的 CSS 类名  | string  | -        | false    |
| transparent | 是否透明               | boolean | false    | false    |
| usePortal   | 是否需要挂载到 body 上 | boolean | false    | false    |

注:为了解决 iOS 上滑动穿透的问题，Mask 组件添加了 fix 方法，请在使用 Mask 组件时，浮层里面的容器有需要滚动的元素，添加 `Yep-scroller` class
