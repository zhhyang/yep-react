---
category: Components
title: 动作面板
---

<DEMO>

| 参数      | 说明                       | 类型               | 默认值           |
| --------- | -------------------------- | ------------------ | ---------------- |
| show      | 是否显示                   | bool               | false            |
| onCancel  | 关闭事件回调               | func               | () =>{}          |
| itemClick | 点击事件回调               | func               | () =>{}          |
| prefixCls | 组件 class 前缀            | string             | Yep-action-sheet |
| style     | 组件样式                   | object             | {}               |
| title     | 是否拥有 title             | string             |
| space     | 是否显示取消按钮上面的空白 | boolean            | false            |
| hasCancel | 是否显示取消按钮           | boolean            | false            |
| data      | 选项数据                   | array              | []               |
| active    | 选中的 item                | number 或者 string | -                |
| className | 额外要添加的 CSS 类名      | string             | -                |
