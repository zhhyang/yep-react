---
category: Layout
title: 索引列表
desc: 此组件常用于 “通讯录”/“城市列表” 等场景中，支持索引导航功能。
---

此组件常用于 “通讯录”/“城市列表” 等场景中，支持索引导航功能。

<DEMO>

| 参数                     | 说明                                                                                             | 类型                               | 默认值                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------ | ---------------------------------- | ----------------------------------------- |
| prefixCls                | 组件 class 前缀                                                                                  | string                             | Yep-indexed-list                          |
| style                    | 组件样式                                                                                         | object                             | {}                                        |
| className                | 组件额外样式                                                                                     | string                             | -                                         |
| showIndicator            | 是否显示指示器                                                                                   | boolean                            | false                                     |
| indicatorStyle           | 指示器样式                                                                                       | object                             | {}                                        |
| data                     | 数据                                                                                             | object                             | `required`                                |
| renderSectionHeader      | 如果提供了此函数，会为每个小节(section)渲染一个标题                                              | func                               | (sectionData, sectionID) => renderable    |
| renderRow                | 从数据源中接受一条数据，以及它和它所在 section 的 ID。返回一个可渲染的组件来为这行数据进行渲染。 | func                               | (rowData, sectionID, rowID) => renderable |
| renderSectionWrapper     | 渲染自定义的区块包裹组件                                                                         | func                               | (sectionID) => renderable                 |
| renderSectionBodyWrapper | 渲染自定义的区块 body 包裹组件                                                                   | object                             | (sectionID) => renderable                 |
| quickIndexedBarTop       | 快捷导航栏最顶部按钮、常用于回到顶部                                                             | object{value:string, label:string} | { value: '#', label: '#' }                |
| indexedBarStyle          | 快捷导航栏 的 style                                                                              | object                             | { }                                       |
| useBodyScroll            | 使用 html 的 body 作为滚动容器                                                                   | boolean                            | true                                      |
| onQuickSearch            | 快捷导航切换时调用                                                                               | func                               | (sectionID: any, topId?:any) => void      |
| renderHeader             | 自定义页头                                                                                       | func                               | () => renderable                          |
| renderFooter             | 自定义页脚                                                                                       | func                               | () => renderable                          |
| renderBodyComponent      | 自定义 body 的包裹组件                                                                           | func                               | () => renderable                          |
| enableQuickIndexedBarTop | 是否显示默认快速回到顶部的 key                                                                   | bool                               | true                                      |
| activeBar                | 外部传进来的选中索引的值                                                                         | string                             | -                                         |
| keyLabel                 | 作为唯一的 key                                                                                   | string                             | `value`                                   |

## Attributes

```
data: {
      A: [
        {label: '安徽省', value: '34'},
        {label: '安徽省0', value: '340'},
        {label: '安徽省1', value: '341'},
        {label: '安徽省2', value: '342'},
        {label: '安徽省3', value: '343'},
      ],
      B: [
        {label: '北京市', value: '01'},
        {label: '北京市0', value: '010'},
        {label: '北京市1', value: '011'},
        {label: '北京市2', value: '012'},
        {label: '北京市3', value: '013'},
      ],
      C: [
        {label: '重庆市', value: '02'},
        {label: '重庆市0', value: '020'},
        {label: '重庆市1', value: '021'},
        {label: '重庆市2', value: '022'},
        {label: '重庆市3', value: '023'},
      ],
    }
```
