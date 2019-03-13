---
category: View
title: 轮播图
---

<DEMO>

| 参数            | 说明                                        | 类型          | 默认值       |
| --------------- | ------------------------------------------- | ------------- | ------------ |
| prefixCls       | 组件 class 前缀                             | string        | Yep-carousel |
| autoPlay        | 不设定不会自动轮播，如需轮播传时间，单位 ms | bool / number | false        |
| className       | 额外要添加的 CSS 类名                       | string        | -            |
| initPage        | 默认第一帧                                  | number        | 0            |
| onTransitionEnd | 每次轮播完一帧的钩子函数                    | function      | null         |
| isBounces       | 是否允许回弹效果                            | bool          | true         |
| isInfinite      | 是否无限滚动                                | bool          | false        |
