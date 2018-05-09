---
category: Components
title: 轻提示
---

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。
## 规则
一次只显示一个 toast。
有 Icon 的 Toast，字数为 4-6 个；没有 Icon 的 Toast，字数不宜超过 14 个。

<DEMO>

API


Toast.show(message, duration, onClose, mask)

Toast.success(message, duration, onClose, mask)

Toast.fail(message, duration, onClose, mask)

Toast.info(message, duration, onClose, mask)

Toast.loading(message, duration, onClose, mask)


| 参数 | 说明 | 类型 | 默认值
| --------- | --------
| message | 提示内容 | string | -
| duration | 自动关闭的延时，单位秒 | number | 3
| onClose | 关闭后回调 | func | () =>{}

duration: Toast.SHORT 3s  Toast.LONG 8s

