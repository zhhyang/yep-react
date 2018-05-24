---
category: Components
title: 滑动操作
---

滑动操作组件

<DEMO>

### SwipeAction Props

| 参数      | 说明                   | 类型    | 默认值           |
| --------- | ---------------------- | ------- | ---------------- |
| prefixCls | 组件 class 前缀        | string  | Yep-swipe |
| style     | 组件样式               | object  | {}               |
| className | 组件额外样式           | string  | -                |
| left      | 左侧按钮组             | array   | -                |
| right     | 右侧按钮组             | array   | -                |
| autoClose | 点击按钮后自动隐藏按钮 | boolean | false            |
| disabled  | 禁用 swipe             | boolean | false            |
| onOpen    | 打开时回调函数         | func    | () =>{}          |
| onClose   | 关闭时回调函数         | func    | () =>{}‘         |

### Button 按钮 Props

| 参数      | 说明         | 类型   | 默认值  |
| --------- | ------------ | ------ | ------- |
| text      | 按钮文案     | String | -       |
| style     | 按钮样式     | Object | {}      |
| onClick   | 按钮点击事件 | func   | () =>{} |
| className | 按钮样式类   | String | -       |
