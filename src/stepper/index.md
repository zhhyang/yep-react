---
category: Form
title: 步进器
---

temp

<DEMO>

| 参数         | 说明            | 类型     | 默认值        |
| ------------ | --------------- | -------- | ------------- |
| prefixCls    | 组件 class 前缀 | string   | Yep-stepper   |
| style        | 组件样式        | object   | {}            |
| className    | 组件额外样式    | string   | -             |
| min          | 最小值          | number   | 1             |
| max          | 最大值          | number   | 99            |
| step         | 自定义步进值    | number   | 1             |
| readonly     | 是否禁用 input  | boolean  | false         |
| value        | 当前值          | number   | 1             |
| onChange     | 步进回调        | function | (value) => {} |
| onLess       | 小于最小值回调  | function | (min) => {}   |
| onGreat      | 大于最大值回调  | function | (max) => {}   |
| buttonAdd    | 自定义按钮      | html     | -             |
| buttonReduce | 自定义按钮      | html     | -             |
