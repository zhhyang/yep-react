---
category: Form
title: 密码输入框
desc: 密码输入框通常与数字键盘组件配合使用
---

密码输入框通常与数字键盘组件配合使用

<DEMO>

| 参数      | 说明                               | 类型           | 默认值             |
| --------- | ---------------------------------- | -------------- | ------------------ |
| prefixCls | 组件 class 前缀                    | string         | Yep-password-input |
| style     | 组件样式                           | object         | {}                 |
| className | 组件额外样式                       | string         | -                  |
| name      | 输入框命名，用于多个密码输入框区分 | string         | -                  |
| value     | 密码值                             | string         | -                  |
| length    | 密码长度                           | number         | 6                  |
| mask      | 是否显示明文密码                   | boolean        | -                  |
| gutter    | 密码框间隙，数字默认单位为 px      | string, number | -                  |
| message   | 底部提示信息                       | component      | -                  |
| onFocus   | 密码框获得焦点触发，默认参数 name  | callback       |                    |
