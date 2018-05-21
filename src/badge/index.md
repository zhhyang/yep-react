---
category: Components
title: 徽标数
---

图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。

<DEMO>

| 参数      | 说明                                                                             | 类型    | 默认值    |
| --------- | -------------------------------------------------------------------------------- | ------- | --------- |
| prefixCls | 组件 class 前缀                                                                  | string  | Yep-badge |
| style     | 组件样式                                                                         | object  | {}        |
| className | 组件额外样式                                                                     | string  | -         |
| text      | 展示的数字或文案，当为数字时候，大于 overflowCount 时显示为 ${max}+，为 0 时隐藏 | string  | number    | - |
| dot       | 不展示数字，只有一个小红点                                                       | boolean | -         |
| max       | 展示封顶的数字值                                                                 | number  | 99        |
| children  | 包裹的元素                                                                       | node    | -         |
