---
category: View
title: 加载动画
---

基于 Lottie 实现的京东 7.0 统一 loading 动画

<DEMO>

| 参数          | 说明                                                                      | 类型           | 默认值           | 必须  |
| ------------- | ------------------------------------------------------------------------- | -------------- | ---------------- | ----- |
| prefixCls     | 组件 class 前缀                                                           | string         | Yep-loading      | false |
| style         | 组件样式                                                                  | object         | {}               | false |
| className     | 组件额外样式                                                              | string         | -                | false |
| animationData | lottie 动画所需要的 json 文件(an Object with the exported animation data) | json 文件      | 京东 App7.0 动画 | false |
| loop          | 循环播放                                                                  | boolean/number | true             | false |
| autoplay      | 是否立即播放                                                              | boolean        | true             | false |
| renderer      | 'svg' / 'canvas' / 'html' to set the renderer                             | string         | `svg`            | false |
