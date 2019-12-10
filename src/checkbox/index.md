---
category: Form
title: 复选框
desc: 多项选择
---

<DEMO>

| 参数           | 说明                      | 类型    | 默认值       |
| -------------- | ------------------------- | ------- | ------------ |
| prefixCls      | 组件 class 前缀           | string  | Yep-checkbox |
| style          | 组件样式                  | object  | {}           |
| className      | 额外要添加的 CSS 类名     | string  | -            |
| name           | 表单中 input 的 name      | string  | -            |
| defaultChecked | 是否默认选中              | boolean | -            |
| checked        | 是否选中                  | boolean | -            |
| disabled       | 是否不可用                | boolean | -            |
| onChange       | change 事件触发的回调函数 | func    | -            |
| value          | checkbox 的值             | any     | -            |

Checkbox.CheckBoxGroup 复选框组

| 参数     | 说明                      | 类型            | 默认值 | 必填  |
| -------- | ------------------------- | --------------- | ------ | ----- |
| value    | 复选框组 已选中的值       | 数组            | []     | false |
| onChange | change 事件触发的回调函数 | (value) => void | {}     | false |
| children | Checkbox                  | Checkbox        | -      | true  |
