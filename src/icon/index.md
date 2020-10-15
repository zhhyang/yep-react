---
category: Basic
title: 图标
desc: svg图标库
---

<DEMO>

## install

```bash
yarn add @jdcfe/icons-react
```

## Basic Usage

```ts
import CartOutlined from '@jdcfe/icons-react/CartOutlined';
或者;
import {CartOutlined} from '@jdcfe/icons-react';
```

## API

| 参数         | 说明                                   | 类型                                   | 默认值 |
| ------------ | -------------------------------------- | -------------------------------------- | ------ |
| className    | 组件 class                             | string                                 | -      |
| onClick      | 点击事件                               | React.MouseEventHandler<SVGSVGElement> | -      |
| style        | 设置图标的样式，例如 fontSize 和 color | CSSProperties                          | -      |
| twoToneColor | 仅适用双色图标。设置双色图标的主要颜色 | string                                 | -      |

## 自定义 Icon

| 参数      | 说明                                                           | 类型                                   | 默认值 |
| --------- | -------------------------------------------------------------- | -------------------------------------- | ------ |
| component | 控制如何渲染图标，通常是一个渲染根标签为 `<svg>` 的 React 组件 | string                                 | -      |
| onClick   | 点击事件                                                       | React.MouseEventHandler<SVGSVGElement> | -      |
| style     | 设置图标的样式，例如 fontSize 和 color                         | CSSProperties                          | -      |

## 使用 quark 上的自定义 font 图标

我们提供了一个 createFromQuark 方法，方便开发者调用在 quark 上的图标。

```jsx
import { createFromQuark } from '@jdcfe/icons-react';

const IconFont = createFromQuark({
scriptUrl: '//storage.360buyimg.com/quark-icon/icons/font_141871GD9AqEgPcFQ3.js',
});

ReactDOM.render(
  <div>
    <h1>Icons from quark.jd.com</h1>
    <IconFont type="miaosha-maisui" />
    <IconFont type="miaosha-xiaoshoue" style={{color:'red'}} />
    <IconFont type="miaosha-wode" />
    <IconFont type="miaosha-gengxin"/>
  </div>
), mountedNode);
```

其本质上是创建了一个使用 <use> 标签来渲染图标的组件。
