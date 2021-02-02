---
category: Feedback
title: 对话框
desc: 用于显示系统的重要信息，并请求用户进行操作反馈
---

<DEMO>

Dialog

| 参数             | 说明                  | 类型    | 默认值     | 是否必填 |
| ---------------- | --------------------- | ------- | ---------- | -------- |
| prefixCls        | 组件 class 前缀       | string  | Yep-dialog | false    |
| style            | 组件样式              | object  | {}         | false    |
| bodyStyle        | body 组件样式         | object  | {}         | false    |
| className        | 额外要添加的 CSS 类名 | string  | -          | false    |
| title            | 对话框的标题          | string  | -          | false    |
| footer           | 底部组件              | node    | -          | false    |
| onClose          | 关闭事件的回调函数    | func    | -          | false    |
| show             | 是否显示              | boolean | false      | false    |
| maskCloseable    | 点击蒙层是否关闭      | boolean | false      | false    |
| dialogTransition | 对话框动画            | string  | zoom       | false    |
| maskTransition   | 蒙层对话              | string  | fade       | false    |

Dialog.confirm

| 参数      | 说明                               | 类型         | 默认值                                                                                                                               |
| --------- | ---------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| title     | 标题                               | string       | -                                                                                                                                    |
| message   | 提示信息                           | string、node | -                                                                                                                                    |
| actions   | 按钮组，{text, onClick,className}, | Array        | `[{text: 'Cancel', onClick: () => console.log('cancel'),className:''},{text: 'Ok', onClick: () => console.log('ok'),className:''},]` |
| restProps | dialog 组件其他参数组成的对象      | object       | {}                                                                                                                                   |

`const confirmInstance = Dialog.confirm(title, message, actions?, restProps?); confirmInstance.close()` 可以在外部关闭 confirm

restProps:

| 参数             | 说明                  | 类型    | 默认值 |
| ---------------- | --------------------- | ------- | ------ |
| style            | 组件样式              | object  | {}     |
| bodyStyle        | body 组件样式         | object  | {}     |
| className        | 额外要添加的 CSS 类名 | string  | -      |
| maskCloseable    | 点击蒙层是否关闭      | boolean | false  |
| dialogTransition | 对话框动画            | string  | zoom   |
| maskTransition   | 蒙层对话              | string  | fade   |
