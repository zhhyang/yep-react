---
order: 0
title: 快速上手
---

如果是在[butler](http://butler.jd.com/#/)中使用，请直接访问[在 butler 中使用](#/doc/use-with-butler).

开始使用前请先配置[京东内部 npm 源](http://npm.m.jd.com/)。

### 安装

使用 [`yarn`](https://yarnpkg.com/en/) 安装：

```bash
yarn add @jdcfe/yep-react
```

或是使用 [`npm`](https://www.npmjs.com/)：

```bash
npm install --save @jdcfe/yep-react
```

### 使用

入口页面 (html 或 模板) 相关设置：

> 引入 [FastClick](https://github.com/ftlabs/fastclick) 并且设置 html `meta` [wiki](http://git.jd.com/JDC-FE/yep-react/wikis/fastclick)
>
> 引入 Promise 的 fallback 支持 (部分安卓手机不支持 Promise)
>
> 屏幕适配(更多参考 [wiki](http://git.jd.com/JDC-FE/lrc-m/wikis/%E7%BB%84%E4%BB%B6%E5%BA%93%E5%9F%BA%E4%BA%8E750%E8%AE%BE%E8%AE%A1%E7%A8%BF%E5%BC%80%E5%8F%91%EF%BC%8C%E5%B1%8F%E5%B9%95%E9%80%82%E9%85%8D))

```html
<!DOCTYPE html>
<html>
<head>
  <!-- set `maximum-scale` for some compatibility issues -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
</head>
<body>
</body>
</html>
```

组件使用实例：

```jsx
import {Button} from '@jdcfe/yep-react';
ReactDOM.render(<Button>Start</Button>, mountNode);
```

引入样式：

```jsx
import '@jdcfe/yep-react/dist/yep-react.css';
```

##### 按需加载

**注意：强烈推荐使用。**

下面两种方式都可以**只加载**用到的组件，选择其中一种方式即可。

* 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

  ```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { libraryName: "@jdcfe/yep-react", style: "css" }] //`style: "css"`会加载css文件, `style: true` 会加载 scss 文件,则必须引入sass-loader
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
