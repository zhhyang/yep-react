---
category: Navigation
title: 步骤条
desc: 拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。
---

<DEMO>

| 参数      | 说明            | 类型                | 默认值                                     |
| --------- | --------------- | ------------------- | ------------------------------------------ |
| prefixCls | 组件 class 前缀 | string              | Yep-steps                                  |
| style     | 组件样式        | React.CSSProperties | {}                                         |
| className | 组件额外样式    | string              | -                                          |
| stepNum   | 当前步骤索引    | number              | 1                                          |
| titles    | 步骤条标题      | string[]            | ['step1', 'step2', 'step3']                |
| className | 步骤条描述      | string[]            | ['step1_text', 'step2_text', 'step3_text'] |
| icon      | 步骤条图标      | string[]            | -                                          |
