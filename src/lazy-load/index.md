---
category: Basic
title: 懒加载组件
---

<DEMO>

| 参数               | 说明                                                                                                                                          | 类型                  | 默认值       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------ |
| prefixCls          | 组件 class 前缀                                                                                                                               | string                | Yep-lazyload |
| style              | 组件样式                                                                                                                                      | object                | {}           |
| className          | 组件额外样式                                                                                                                                  | string                | -            |
| children           | 仅支持加载一个子组件                                                                                                                          | Node                  | -            |
| scrollContainer    | 通过选择器或者 DOM 节点指定滚动容器，不指定将默认使用 window 对象                                                                             | string/Node           | -            |
| height             | 加载时，占位组件的高度，传入数字默认使用单位 px                                                                                               | Number/String         | -            |
| once               | 更新组件时是否仍监听 scroll/resize 事件， 如果值为 true，该组件将不监听 scroll/resize 事件， 同时 unmountIfInvisible 属性也对该组件不起效果。 | Bool                  | false        |
| offset             | 预加载组件距离视图高度阈值，当预加载组件距离可视区域小于该值将执行加载,当该值为 [100, 200]时表示，横向滚动阈值为 100，上下滚动阈值为 200      | Number/ Array(Number) | 0            |
| scroll             | 是否监听滚动事件                                                                                                                              | Bool                  | true         |
| resize             | 是否监听 resize 事件                                                                                                                          | Bool                  | false        |
| overflow           | 如果在溢出容器内加载组件时，请将此设置为 true。还要确保已将除静态属性以外的位置属性设置为溢出容器。                                           | Bool                  | false        |
| placeholder        | 指定占位内容                                                                                                                                  | Any                   | -            |
| unmountIfInvisible | 移动到可视区域外的组件是否进行卸载                                                                                                            | Bool                  | false        |
| debounce           | 是否增加防抖函数，值为 Number 类型时，单位为 ms                                                                                               | Bool/Number           | -            |
| throttle           | 是否增加节流函数，值为 Number 类型时，单位为 ms                                                                                               | Bool/Number           | -            |
