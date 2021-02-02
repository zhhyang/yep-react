---
category: Feedback
title: 进度条
desc: 表示某个任务的当前进度
---

<DEMO>

| 参数            | 说明                                               | 类型    | 默认值                 | required |
| --------------- | -------------------------------------------------- | ------- | ---------------------- | -------- |
| prefixCls       | 组件 class 前缀                                    | string  | Yep-common-progressbar | false    |
| style           | 组件样式                                           | object  | {}                     | false    |
| className       | 组件额外 class                                     | string  | {}                     | false    |
| percent         | 进度条的值                                         | number  | 0                      | false    |
| colorStart      | 进度条渐变颜色的起始值                             | string  | -                      | false    |
| colorEnd        | 进度条渐变颜色的结束值                             | string  | -                      | false    |
| backgroundColor | 进度条背景颜色(与 colorStart、colorEnd 只能取一个) | string  | #ec3838                | false    |
| fixed           | 是否固定在顶部                                     | boolean | false                  | false    |
