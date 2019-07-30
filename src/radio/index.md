---
category: Form
title: 单选框
desc: 单项选择，例如:性别
---

<DEMO>

| 参数       | 说明            | 类型                                                                      | 默认值    | 必填  |
| ---------- | --------------- | ------------------------------------------------------------------------- | --------- | ----- |
| prefixCls  | 组件 class 前缀 | string                                                                    | Yep-radio | false |
| style      | 组件样式        | object                                                                    | {}        | false |
| className  | 额外 class      | string                                                                    | -         | false |
| name       | name            | string                                                                    | -         | false |
| options    | 选项            | Array [{label: 'Option3',value: '3',disabled: true,defaultChecked:true,}] | []        |
| checked    | 选中项的 value  | string                                                                    | -         | false |
| horizontal | 是否水平排列    | boolean                                                                   | false     | false |
| onChange   | 选择的回调      | func : (value) => {}                                                      | -         | true  |
