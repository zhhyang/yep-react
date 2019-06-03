---
category: Form
title: 数字键盘
---

数字键盘件通常与密码输入框组件配合使用

<DEMO>

| 参数      | 说明                              | 类型    | 默认值              |
| --------- | --------------------------------- | ------- | ------------------- |
| prefixCls | 组件 class 前缀                   | string  | Yep-number-keyboard |
| style     | 组件样式                          | object  | {}                  |
| className | 组件额外样式                      | string  | -                   |
| show      | 是否显示键盘                      | boolean | -                   |
| theme     | 样式风格，可选值为 default custom | string  | default             |
| input     | 点击按键时触发                    | func    | (value) => {}       |
| delete    | 点击删除按键时触发                | func    | () => {}            |
| confirm   | 点击确定按键时触发                | func    | () => {}            |
