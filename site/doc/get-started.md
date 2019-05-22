---
order: 0
title: 快速上手
---

如果是在[butler](http://butler.jd.com/#/)中使用，请直接访问[在 butler 中使用](#/doc/use-with-butler).

### 安装

使用 [`yarn`](https://yarnpkg.com/en/) 安装：

```bash
yarn add @jdcfe/yep-react
```

或是使用 [`npm`](https://www.npmjs.com/)：

```bash
npm install --save @jdcfe/yep-react
```

## 引入组件

### 方式一. 自动按需引入组件 **强烈推荐使用**

使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

```bash
# 安装插件
yarn add -D babel-plugin-import
```

```javascript
// 在.babelrc 中添加配置
// babel 6  .babelrc or babel-loader option
{
  "plugins": [
    ["import", {
        "libraryName": "@jdcfe/yep-react",
        "libraryDirectory": "lib", // `lib`会加载commonjs模块代码，`es` 会加载esModule 代码
        "style": true //`style: "css"`会加载css文件, `style: true` 会加载 scss 文件,则必须引入sass-loader
      }
    ]
  ]
}
```

```javascript
  // babel 7  .babelrc or babel-loader option
  {
    "plugins": [
      ["import", {
          "libraryName": "@jdcfe/yep-react",
          "libraryDirectory": "lib", // `lib`会加载commonjs模块代码，`es` 会加载esModule 代码
          "style": true //`style: "css"`会加载css文件, `style: true` 会加载 scss 文件,则必须引入sass-loader
        },
        "@jdcfe/yep-react"
      ]
    ]
  }
```

然后只需从 @jdcfe/yep-react 引入模块即可，无需单独引入样式。

```jsx
// babel-plugin-import 会帮助你加载 JS 和 SCSS
import {Button} from '@jdcfe/yep-react';
```

### 方式二. 手动按需引入

在不使用 babel-plugin-import 插件的情况下，可以手动引入

```jsx
import Button from '@jdcfe/yep-react/lib/button'; // 加载 JS
import '@jdcfe/yep-react/lib/button/style'; // 加载 SCSS
```

### 方式三. 导入所有组件

支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法

```jsx
import {Button} from '@jdcfe/yep-react';
import '@jdcfe/yep-react/dist/@jdcfe/yep-react.css';
```

> 注意：配置 babel-plugin-import 插件后将不允许导入所有组件

## 其他

### REM 适配

> 屏幕适配(更多参考 [wiki](https://github.com/jdf2e/yep-react/wikis/%E7%BB%84%E4%BB%B6%E5%BA%93%E5%9F%BA%E4%BA%8E750%E8%AE%BE%E8%AE%A1%E7%A8%BF%E5%BC%80%E5%8F%91%EF%BC%8C%E5%B1%8F%E5%B9%95%E9%80%82%E9%85%8D))

Yep-React 样式默认使用`px`做为单位，设计规范按照 750 的 2 倍屏，需要 px 转为 rem

组件样式基于 sass 开发，需要安装 node-sass sass-loader

```
yarn add -D node-sass sass-loader
```

```
yarn add -D postcss-pxtorem
```

配置 postcss-pxtorem

```javascript
const pxtorem = require('postcss-pxtorem');
pxtorem({
  rootValue: 100,
  propList: [],
});
```
