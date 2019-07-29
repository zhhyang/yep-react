---
category: Feedback
title: 下拉刷新
desc: 通过下拉触发，立刻重新加载内容。
---

通过下拉触发，立刻重新加载内容。

<DEMO>

| 参数                       | 说明                                                                                             | 类型            | 默认值                                                                               | 必须  |
| -------------------------- | ------------------------------------------------------------------------------------------------ | --------------- | ------------------------------------------------------------------------------------ | ----- |
| prefixCls                  | 组件 class 前缀                                                                                  | string          | Yep-pull-to-refresh                                                                  | false |
| style                      | 组件样式                                                                                         | object          | {}                                                                                   | false |
| className                  | 组件额外样式                                                                                     | string          | -                                                                                    | false |
| pullDownToRefreshThreshold | 下拉触发阈值                                                                                     | number          | 50                                                                                   | false |
| maxPullDownDistance        | 最大下拉距离                                                                                     | number          | 100                                                                                  | false |
| refreshFunction            | 刷新回调函数                                                                                     | () => void      | -                                                                                    | true  |
| refreshing                 | 是否是刷新请求状态                                                                               | boolean         | -                                                                                    | false |
| indicator                  | 指示器配置 { activate: ReactNode, deactivate: ReactNode, release: ReactNode, finish: ReactNode } | object          | {activate: '释放更新', deactivate: '下拉刷新', release: '加载中...', finish: '完成'} | false |
| getScrollContainer         | 获取滚动的容器                                                                                   | () => undefined | () => undefined                                                                      | false |
