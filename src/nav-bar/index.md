---
category: Navigation
title: 导航栏
desc: 位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力。
---

位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力。

<DEMO>

| 参数         | 说明                     | 类型        | 默认值                                |
| ------------ | ------------------------ | ----------- | ------------------------------------- |
| prefixCls    | 组件 class 前缀          | string      | Yep-nav-bar                           |
| style        | 组件样式                 | object      | {}                                    |
| className    | 组件额外样式             | string      | -                                     |
| leftIcon     | 出现在最左边的图标占位符 | node        | <Icon type="arrow-back" size="xs" />, |
| leftContent  | 导航左边内容             | node\string | -                                     |
| onLeftClick  | 导航左边点击回调         | func        | () => null                            |
| close        | 导航左边关闭是否显示     | boolean     | false                                 |
| closeContent | 导航左边关闭组件         | node        | `关闭`                                |
| onCloseClick | 导航左边关闭组件点击回调 | func        | () => null                            |
| rightContent | 导航右边内容             | node\string | -                                     |
| onRightClick | 导航右边内容点击回调     | func        | () => null                            |
| share        | 导航右边分享组件         | node        | -                                     |
