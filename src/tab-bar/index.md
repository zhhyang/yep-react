---
category: Components
title: 标签栏
---

位于 APP 底部，方便用户在不同功能模块之间进行快速切换。

### 规则

1.  用作 APP 的一级分类，数量控制在 3-5 个之间。
2.  即使某个 Tab 不可用，也不要禁用或者移除该 Tab。

<DEMO>

TabBar

| 参数         | 说明            | 类型   | 默认值      |
| ------------ | --------------- | ------ | ----------- |
| prefixCls    | 组件 class 前缀 | string | Yep-tab-bar |
| style        | 组件样式        | object | {}          |
| className    | 额外 class      | string | -           |
| barTintColor | TabBar 背景色   | string | white       |

Tab

| 参数                | 说明                                                | 类型            | 默认值          |
| ------------------- | --------------------------------------------------- | --------------- | --------------- |
| prefixCls           | 组件 class 前缀                                     | string          | Yep-tab-bar-tab |
| style               | 组件样式                                            | object          | {}              |
| className           | 额外 class                                          | string          | -               |
| tintColor           | 选中状态颜色                                        | string          | #ec3838         |
| unselectedTintColor | 未选中状态颜色                                      | string          | #888            |
| selected            | 是否选中状态                                        | boolean         | false           |
| icon                | 默认展示图片(图片的 url 地址或组件)                 | string 或 node  | -               |
| selectedIcon        | 选中状态展示图片(图片的 url 地址或组件)             | string 或 node  | -               |
| title               | 标题文字                                            | string          | -               |
| badge               | 徽标数                                              | number \ string | 无              |
| dot                 | 是否在右上角显示小红点（在设置 badge 的情况下失效） | boolean         | false           |
