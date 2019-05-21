---
category: Feedback
title: 下拉框
---

下拉框

<DEMO>

| 参数      | 说明                            | 类型                                                | 默认值       | 必填  |
| --------- | ------------------------------- | --------------------------------------------------- | ------------ | ----- |
| prefixCls | 组件 class 前缀                 | string                                              | Yep-dropdown | false |
| style     | 组件样式                        | object                                              | {}           | false |
| className | 组件额外样式                    | string                                              | -            | false |
| overlay   | 弹出层内容                      | node                                                | -            | true  |
| direction | 出现方向                        | oneOf(['up', 'down', 'left', 'right'])              | `down`       | false |
| align     | 对齐方式                        | oneOf(['top', 'right', 'bottom', 'left', 'middle']) | `left`       | false |
| open      | 下拉展开状态                    | bool                                                | -            | false |
| onToggle  | 切换 open 状态后的回调          | func                                                | -            | false |
| aligned   | 触发组件 与 弹出层内容 宽度相同 | bool                                                | `false`      | false |
