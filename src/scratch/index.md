---
category: Components
title: 刮奖
---

<DEMO>

| 参数          | 说明                                     | 类型       | 默认值      |
| ------------- | ---------------------------------------- | ---------- | ----------- |
| prefixCls     | 组件 class 前缀                          | string     | Yep-scratch |
| style         | 组件样式                                 | object     | {}          |
| className     | 组件额外样式                             | string     | -           |
| scratchImgUrl | 刮奖层图片 url                           | string     | -           |
| resPercent    | 刮开至整个刮奖区域的该百分比时，刮层消失 | number     | 60          |
| resCallback   | 刮层消失时的回调函数                     | func       | ()=>{}      |
| children      | 开奖层内容                               | React.Node | -           |
