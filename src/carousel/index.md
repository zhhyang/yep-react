---
category: View
title: 走马灯
desc: 轮播图，常用于展示一组图片
---

<DEMO>

| 参数                                      | 说明                                        | 类型                                                                                | 默认值       | 是否必填 |
| ----------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------- | ------------ | -------- |
| prefixCls                                 | 组件 class 前缀                             | string                                                                              | Yep-carousel | false    |
| style                                     | 组件 style                                  | object                                                                              | {}           | false    |
| autoPlay                                  | 不设定不会自动轮播，如需轮播传时间，单位 ms | bool / number                                                                       | false        | false    |
| className                                 | 额外要添加的 CSS 类名                       | string                                                                              | -            | false    |
| initPage                                  | 默认第一帧                                  | number                                                                              | 0            | false    |
| onTransitionEnd(deprecated,使用 onChange) | 每次轮播完一帧的钩子函数                    | function                                                                            | null         | false    |
| onChange                                  | 每次轮播完一帧的钩子函数                    | function                                                                            | null         | false    |
| isInfinite                                | 是否无限滚动                                | bool                                                                                | false        | false    |
| renderPage                                | 自定义页数组件                              | (active:number,total:number) =>void;                                                | -            | false    |
| showPager                                 | 是否显示自定义面板页数组件                  | boolean;                                                                            | false        | false    |
| dots                                      | 是否显示面板指示点                          | boolean                                                                             | true         | false    |
| dotsClass                                 | 面板指示点自定义 class                      | string                                                                              | -            | false    |
| vertical                                  | 垂直显示                                    | boolean                                                                             | false        | false    |
| distance                                  | 左右 swipe 触发切换的距离                   | boolean                                                                             | false        | false    |
| children                                  | 需要轮播的元素                              | ReactNodeArray                                                                      | -            | true     |
| onClickItem                               | 每一帧点击事件                              | (index: number, item: any) => void;                                                 | -            | false    |
| verticalSwipe                             | 每一帧点击事件                              | (index: number, item: any) => void;                                                 | -            | false    |
| width                                     | 每一帧点击事件                              | (index: number, item: any) => void;                                                 | -            | false    |
| dynamicHeight                             | 高度自适应(垂直显示 要设置为 true)          | boolean                                                                             | false        | false    |
| centerMode                                | 居中模式                                    | boolean                                                                             | false        | false    |
| centerSlidePercentage                     | 居中模式占据的百分比                        | number                                                                              | 80           | false    |
| onSwipeStart                              | swipe 开始回调                              | (event) => void;                                                                    | -            | false    |
| onSwipeEnd                                | swipe 停止回调                              | (event) => void;                                                                    | -            | false    |
| onSwipeMove                               | swipe 滑动回调                              | (event) => void;                                                                    | -            | false    |
| renderIndicator                           | 自定义指示器                                | (onClickHandler: any, isSelected: boolean, index: number, label: any) => ReactNode; | -            | false    |
| renderItem                                | 自定义轮播帧                                | (item: any, xx: any) => ReactNode;                                                  | 80           | false    |
| transitionTime                            | 动画执行时间                                | number                                                                              | 350          | false    |
