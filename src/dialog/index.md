---
category: Components
title: 对话框
---


<DEMO>

Dialog

| 参数 | 说明 | 类型 | 默认值
| --------- | -------- | --------- | --------
| prefixCls | 组件class前缀 | string | Yep-dialog
| style | 组件样式 | object | {}
| bodyStyle | body组件样式 | object | {}
| className | 额外要添加的 CSS 类名 | string | -
| title | 对话框的标题 | string | -
| footer | 底部组件 | node | -
| onClose | 关闭事件的回调函数 | func | - 
| show | 是否显示 | boolean | false
| maskCloseable | 点击蒙层是否关闭	 | func | -
| dialogTransition | 对话框动画	 | string | zoom
| maskTransition | 蒙层对话	 | string | fade


Dialog.confirm

| 参数 | 说明 | 类型 | 默认值
| --------- | -------- | --------- | --------
| title | 标题 | string | -
| message | 提示信息 | string | -
| actions | 按钮组，{text, onClick}, | Array | [{text: 'Cancel', onClick: () => console.log('cancel')},{text: 'Ok', onClick: () => console.log('ok')},]
