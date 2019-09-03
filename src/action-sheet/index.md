---
category: Feedback
title: 动作面板
desc: 从底部弹出的模态框，提供和当前场景相关的2个以上的操作动作，也支持提供标题和取消按钮，内置固定的展示样式，不支持特别灵活的定制。
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
