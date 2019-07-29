---
category: Form
title: 评分
desc: 评分组件，可用于选择，也可只用于展示
---

评分组件，可以定制

<DEMO>

| 参数               | 说明             | 类型                          | 默认值   |
| ------------------ | ---------------- | ----------------------------- | -------- |
| prefixCls          | 组件 class 前缀  | string                        | Yep-rate |
| style              | 组件样式         | object                        | {}       |
| className          | 组件额外样式     | string                        | -        |
| name               | input name       | string                        | -        |
| value              | 初始值           | number                        | -        |
| editing            | 是否可改变       | boolean                       | true     |
| starCount          | star 的数量      | number                        | 5        |
| onStarClick        | star 点击回调    | func                          | -        |
| renderStarIcon     | star icon 自定义 | （index, value, name, id） => | -        |
| renderStarIconHalf | 自定义半星       | （index, value, name, id） => | -        |
