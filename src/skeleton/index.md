---
category: View
title: 占位符
---

使用 SVG 创建一个模拟将被加载的内容结构的加载器集合，类似于 Facebook 卡片加载器

## 特性

- **完全可定制:** 你可以改变颜色，速度和尺寸;
- **创建你自己的 loading:** 使用
  [create-content-loader](https://danilowoz.github.io/create-content-loader/) 去创建定制的 loadings;
- **开箱可用:** FacebookStyle、InstagramStyle、CodeStyle、ListStyle、BulletListStyle;
- **高性能:** 纯 SVG, 无需 scripts, canvas, etc;

<DEMO>

| 参数                    | 类型        | 默认值           | 说明                                                                      |
| ----------------------- | ----------- | ---------------- | ------------------------------------------------------------------------- |
| **animate**             | `{Boolean}` | `true`           | `false` to render with no animation                                       |
| **speed**               | `{Number}`  | `2`              | Animation speed in seconds                                                |
| **className**           | `{String}`  | `''`             | Classname in the `<svg/>`                                                 |
| **width**               | `{Number}`  | `400`            | viewBox width of `<svg/>`                                                 |
| **height**              | `{Number}`  | `130`            | viewBox height of `<svg/>`                                                |
| **preserveAspectRatio** | `{String}`  | `xMidYMid meet`  | Aspect ratio option of `<svg/>`                                           |
| **primaryColor**        | `{String}`  | `#f3f3f3`        | Background                                                                |
| **secondaryColor**      | `{String}`  | `#ecebeb`        | Animation color                                                           |
| **primaryOpacity**      | `{Number}`  | `1`              | Background opacity (0 = transparent, 1 = opaque)                          |
| **secondaryOpacity**    | `{Number}`  | `1`              | Animation opacity (0 = transparent, 1 = opaque)                           |
| **style**               | `{Object}`  | `null`           | Ex: `{ width: '100%', height: '70px' }`                                   |
| **uniquekey**           | `{String}`  | random unique id | Use the same value of prop key, that will solve inconsistency on the SSR. |
