---
category: Components
title: 占位符
---


<DEMO>


| 参数  | 类型 | 默认值 | 说明
| --------- | -------- | --------- | -------- 
| **animate**             | `{Boolean}` | `true`           | `false` to render with no animation                        |
| **speed**               | `{Number}`  | `2`              | Animation speed in seconds                                 |
| **className**           | `{String}`  | `''`             | Classname in the `<svg/>`                                  |
| **width**               | `{Number}`  | `400`            | viewBox width of `<svg/>`                                  |
| **height**              | `{Number}`  | `130`            | viewBox height of `<svg/>`                                 |
| **preserveAspectRatio** | `{String}`  | `xMidYMid meet`  | Aspect ratio option of `<svg/>`                            |
| **primaryColor**        | `{String}`  | `#f3f3f3`        | Background                                                 |
| **secondaryColor**      | `{String}`  | `#ecebeb`        | Animation color                                            |
| **primaryOpacity**      | `{Number}`  | `1`              | Background opacity (0 = transparent, 1 = opaque)           |
| **secondaryOpacity**    | `{Number}`  | `1`              | Animation opacity (0 = transparent, 1 = opaque)            |
| **style**               | `{Object}`  | `null`           | Ex: `{ width: '100%', height: '70px' }`                                |
| **uniquekey**           | `{String}`  | random unique id | Use the same value of prop key, that will solve inconsistency on the SSR. |
