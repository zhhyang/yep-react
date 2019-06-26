---
category: View
title: 走马灯
desc: 轮播图，常用于展示一组图片
---

<DEMO>

| 参数            | 说明                                        | 类型                                 | 默认值       | 是否必填 |
| --------------- | ------------------------------------------- | ------------------------------------ | ------------ | -------- |
| prefixCls       | 组件 class 前缀                             | string                               | Yep-carousel | false    |
| style           | 组件 style                                  | object                               | {}           | false    |
| autoPlay        | 不设定不会自动轮播，如需轮播传时间，单位 ms | bool / number                        | false        | false    |
| className       | 额外要添加的 CSS 类名                       | string                               | -            | false    |
| initPage        | 默认第一帧                                  | number                               | 0            | false    |
| onTransitionEnd | 每次轮播完一帧的钩子函数                    | function                             | null         | false    |
| isBounces       | 是否允许回弹效果                            | bool                                 | true         | false    |
| isInfinite      | 是否无限滚动                                | bool                                 | false        | false    |
| renderPage      | 自定义面板指示点组件                        | (active:number,total:number) =>void; | -            | false    |
| dots            | 是否显示面板指示点                          | boolean                              | true         | false    |
| dotsClass       | 面板指示点自定义 class                      | string                               | -            | false    |
| vertical        | 垂直显示                                    | boolean                              | false        | false    |
