---
category: Components
title: 选择器
---

<DEMO>

| 参数                 | 说明                                                             | 类型                                     | 默认值     |
| -------------------- | ---------------------------------------------------------------- | ---------------------------------------- | ---------- |
| prefixCls            | 组件 class 前缀                                                  | string                                   | Yep-picker |
| style                | 组件样式                                                         | object                                   | {}         |
| show                 | 是否显示                                                         | boolean                                  | false      |
| onCancel             | 点击取消时执行的回调                                             | func                                     | ()=>{}     |
| onOk                 | 点击选中时执行的回调                                             | func                                     | ()=>{}     |
| data                 | 数据源                                                           | `Array<{value, label, children: Array}>` | -          |
| defaultSelectedValue | 默认选中的数据                                                   | string，number                           | -          |
| value                | 值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层 value | Array                                    | -          |
| cols                 | 列数                                                             | Number                                   | `3`        |
| onChange             | 选中后的回调                                                     | (val): void                              | -          |
| onPickerChange       | 每列数据选择变化后的回调函数                                     | (val): void                              | -          |
| itemStyle            | 每列样式                                                         | Object                                   | -          |
| indicatorStyle       | indicator 样式                                                   | Object                                   | -          |
| onOk                 | 点击选中时执行的回调                                             | (val): void                              | 无         |
| title                | 大标题                                                           | String                                   | -          |
| disabled             | 是否不可用                                                       | Boolean                                  | false      |
| cascade              | 是否联动                                                         | Boolean                                  | true       |
