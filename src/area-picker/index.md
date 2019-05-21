---
category: Feedback
title: 主站地区选择组件
---

主站地区选择组件

<DEMO>

| 参数                | 说明                                         | 类型                                                                                        | 默认值                     | 必填  |
| ------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------- | ----- |
| prefixCls           | 组件 class 前缀                              | string                                                                                      | Yep-area-picker            | false |
| style               | 组件样式                                     | object                                                                                      | {}                         | false |
| className           | 组件额外样式                                 | string                                                                                      | -                          | false |
| show                | 是否显示                                     | boolean                                                                                     | false                      | false |
| maskCloseable       | 点击遮罩层是否收起                           | boolean                                                                                     | false                      | false |
| distanceToChangeTab | 左右滑动触发切换的安全距离                   | number                                                                                      | 10                         | false |
| title               | 顶部标题                                     | string                                                                                      | `配送至`                   | false |
| initialData         | 顶层数据                                     | `array[{id:number,name:string}]`                                                            | -                          | true  |
| onOk                | 选中最后一级数据时执行的回调                 | func                                                                                        | -                          | true  |
| onCancel            | 点击关闭按钮时执行的回调                     | func                                                                                        | -                          | true  |
| fetchAction         | 获取二三四级数据接口的回调，必须返回 Promise | `func (city:{id,name,...},index:选中数据的层级(0,1,2)) => promise`                          | -                          | true  |
| keyExtractor        | 用来获取唯一的 key                           | `func (item: object, index: number) => number;`                                             | (item, index) => item.id   | false |
| nameExtractor       | 用来获取地区的显示                           | `func (item: object) => string;`                                                            | (item, index) => item.name | false |
| chooseLabel         | 未选择时 tab 显示的文案                      | string                                                                                      | `请选择`                   | false |
| selected            | 默认选中的地区                               | `array[{id:number,name:string}]`如果不是 id 和 name,必须配置 `keyExtractor` `nameExtractor` | []                         | false |
