---
category: Components
title: 标签页
---

用于让用户在不同的视图中进行切换。

<DEMO>

### Tabs

| 属性                    | 说明                       | 类型                                                             | 默认值     | 必选  |
| ----------------------- | -------------------------- | ---------------------------------------------------------------- | ---------- | ----- |
| prefixCls               | 样式前缀                   | string                                                           | Yep-tabs   | false |
| className               | 组件额外样式               | string                                                           | -          | false |
| tabBarPosition          | TabBar 位置                | 'top' \| 'bottom' \| 'left' `(web only)` \| 'right' `(web only)` | top        | false |
| renderTabBar            | 替换 TabBar                | ((props: TabBarPropsType) => React.ReactNode) \| false           |            | false |
| initialPage             | 初始化 Tab, index or key   | number \| string                                                 |            | false |
| page                    | 当前 Tab, index or key     | number \| string                                                 |            | false |
| swipeable               | 是否可以滑动内容切换       | boolean                                                          | true       | false |
| animated                | 是否开启切换动画           | boolean                                                          | true       | false |
| onChange                | tab 变化时触发             | (tab: Models.TabData, index: number) => void                     |            | false |
| onTabClick              | tab 被点击的回调           | (tab: Models.TabData, index: number) => void                     |            | false |
| usePaged                | 是否启用分页模式           | boolean                                                          | true       | false |
| tabDirection            | Tab 方向                   | 'horizontal' \| 'vertical'                                       | horizontal | false |
| tabBarUnderlineStyle    | tabBar 下划线样式          | React.CSSProperties \| any                                       |            | false |
| tabBarBackgroundColor   | tabBar 背景色              | string                                                           |            | false |
| tabBarActiveTextColor   | tabBar 激活 Tab 文字颜色   | string                                                           |            | false |
| tabBarInactiveTextColor | tabBar 非激活 Tab 文字颜色 | string                                                           |            | false |
| tabBarTextStyle         | tabBar 文字样式            | React.CSSProperties \| any                                       |            | false |
| renderTab               | 替换 TabBar 的 Tab         | (tab: Models.TabData) => React.ReactNode                         |            | false |

### Tabs.DefaultTabBar

| 属性       | 说明               | 类型                                         | 默认值               | 必选  |
| ---------- | ------------------ | -------------------------------------------- | -------------------- | ----- |
| goToTab    | 跳转 Tab           | (index: number) => boolean                   |                      | true  |
| tabs       | tab 数据           | []                                           |                      | true  |
| activeTab  | 当前激活 Tab 索引  | number                                       |                      | true  |
| animated   | 是否使用动画       | boolean                                      |                      | true  |
| prefixCls  | 样式前缀           | string                                       | Yep-tabs-default-bar | false |
| renderTab  | 替换 TabBar 的 Tab | (tab: Models.TabData) => React.ReactNode     |                      | false |
| page       | Tab 分页尺寸       | number                                       | 5                    | false |
| onTabClick | tab 被点击的回调   | (tab: Models.TabData, index: number) => void |                      | false |
