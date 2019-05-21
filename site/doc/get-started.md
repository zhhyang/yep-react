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

组件样式基于 sass 开发，需要安装 node-sass

```
yarn add -D node-sass
```

设计规范按照 750 的 2 倍屏，需要 px 转为 rem

```
yarn add -D postcss-pxtorem
```

### 使用

入口页面 (html 或 模板) 相关设置：

> 屏幕适配(更多参考 [wiki](https://github.com/jdf2e/yep-react/wikis/%E7%BB%84%E4%BB%B6%E5%BA%93%E5%9F%BA%E4%BA%8E750%E8%AE%BE%E8%AE%A1%E7%A8%BF%E5%BC%80%E5%8F%91%EF%BC%8C%E5%B1%8F%E5%B9%95%E9%80%82%E9%85%8D))

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
</head>
<body>
</body>
</html>
```

配置 postcss-pxtorem

```javascript
const pxtorem = require('postcss-pxtorem');
pxtorem({
  rootValue: 100,
  propList: [],
});
```

组件使用实例：

```jsx
import {Button} from '@jdcfe/yep-react';
ReactDOM.render(<Button>Start</Button>, mountNode);
```

引入样式：

```jsx
import '@jdcfe/yep-react/dist/@jdcfe/yep-react.css';
```

##### 按需加载

**注意：强烈推荐使用。**

下面两种方式都可以**只加载**用到的组件，选择其中一种方式即可。

* 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

  ```javascript
  // babel 6  .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { libraryName: "@jdcfe/yep-react", style: "css" }] //`style: "css"`会加载css文件, `style: true` 会加载 scss 文件,则必须引入sass-loader
    ]
  }
  ```

  ```javascript
    // babel 7  .babelrc or babel-loader option
    {
      "plugins": [
        ["import", { libraryName: "@jdcfe/yep-react", style: "css" },"@jdcfe/yep-react"] //`style: "css"`会加载css文件, `style: true` 会加载 scss 文件,则必须引入sass-loader
      ]
    }
  ```

  然后只需从 @jdcfe/yep-react 引入模块即可，无需单独引入样式。

  ```jsx
  // babel-plugin-import 会帮助你加载 JS 和 SCSS
  import {Button} from '@jdcfe/yep-react';
  ```

* 手动引入

  ```jsx
  import Button from '@jdcfe/yep-react/lib/button'; // 加载 JS
  import '@jdcfe/yep-react/lib/button/style'; // 加载 SCSS
  ```
