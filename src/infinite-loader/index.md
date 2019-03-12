---
category: View
title: 滚动无限加载
---

滚动无限加载

<DEMO>

| 参数                       | 说明                                                            | 类型    | 默认值              | required | -------- |
| -------------------------- | --------------------------------------------------------------- | ------- | ------------------- | -------- | -------- |
| children                   | 列表                                                            | node    | -                   | true     |
| loadMore                   | 请求更多数据调用的方法                                          | func    | -                   | true     |
| hasMore                    | 是否还有更多数据                                                | boolean | true                | false    |
| loader                     | 等待请求时显示在最底部的组件                                    | node    | -                   | false    |
| scrollThreshold            | 列表滚动到多少时请求更多数据                                    | number  | 0.8                 | false    |
| endMessage                 | 数据全部加载完成时显示在底部的组件                              | node    | -                   | false    |
| style                      | 额外样式                                                        | object  | {}                  | false    |
| className                  | 额外 class                                                      | string  | Yep-infinite-loader | false    |
| height                     | 滚动加载列表的固定高度                                          | number  | -                   | false    |
| scrollableTarget           | 滚动的父容器 id                                                 | string  | -                   | false    |
| hasChildren                | 如果 children 不是数组，提供额外的 prop 来计算数据是 0 还是更多 | boolean | -                   | false    |
| pullDownToRefresh          | 是否下拉刷新数据                                                | boolean | -                   | false    |
| pullDownToRefreshContent   | 下拉刷新数据的提示文案组件                                      | node    | -                   | false    |
| releaseToRefreshContent    | 松开刷新数据显示的文案组件                                      | node    | -                   | false    |
| pullDownToRefreshThreshold | 下拉触发刷新的距离                                              | number  | 100                 | false    |
| refreshFunction            | 下拉刷新触发的事件                                              | func    | -                   | false    |
| onScroll                   | 容器滚动时触发的事件                                            | func    | -                   | false    |
| dataLength                 | 数据的长度                                                      | number  | -                   | false    |