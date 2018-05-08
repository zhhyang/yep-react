---
order: 0
title: 快速上手
---

开始使用前请先配置[京东内部 npm 源](http://npm.m.jd.com/)。

### 安装

使用 [`yarn`](https://yarnpkg.com/en/) 安装：

```bash
yarn add @jdcfe/lrc-m
```

或是使用 [`npm`](https://www.npmjs.com/)：

```bash
npm install --save @jdcfe/lrc-m
```

### 使用

入口页面 (html 或 模板) 相关设置：

> 引入 [FastClick](https://github.com/ftlabs/fastclick) 并且设置 html `meta` (更多参考 [#576](https://github.com/ant-design/ant-design-mobile/issues/576))
>
> 引入 Promise 的 fallback 支持 (部分安卓手机不支持 Promise)

```html
<!DOCTYPE html>
<html>
<head>
  <!-- set `maximum-scale` for some compatibility issues -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
  <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
  <script>
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
      }, false);
    }
    if(!window.Promise) {
      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
    }
  </script>
</head>
<body></body>
</html>
```

组件使用实例：

```jsx
import { Button } from '@jdcfe/lrc-m';
ReactDOM.render(<Button>Start</Button>, mountNode);
```

引入样式：

```jsx
import '@jdcfe/lrc-m/dist/lrc-m.css';  // or '@jdcfe/lrc-m/dist/lrc-m.scss'
```

##### 按需加载

**注意：强烈推荐使用。**

下面两种方式都可以**只加载**用到的组件，选择其中一种方式即可。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

   ```js
   // .babelrc or babel-loader option
   {
     "plugins": [
       ["import", { libraryName: "@jdcfe/lrc-m", style: true }] // `style: true` 会加载 scss 文件
     ]
   }
   ```

   然后只需从 @jdcfe/lrc-m 引入模块即可，无需单独引入样式。

   ```jsx
   
   // babel-plugin-import 会帮助你加载 JS 和 CSS
   import { Button } from '@jdcfe/lrc-m';
   
   ```

- 手动引入

   ```jsx
   
   import Button from '@jdcfe/lrc-m/lib/button';  // 加载 JS
   import '@jdcfe/lrc-m/lib/button/style';         // 加载 SCSS
   
   ```
