---
order: 4
title: 在butler中使用
---

[butler](http://butler.jd.com/#/) A simple build tool for web developer 。

---

## 安装和初始化

安装前请先配置[京东私有 npm 源](http://npm.m.jd.com/)。

```bash
npm config set registry http://registry.m.jd.com
```

或是使用 [nrm](https://github.com/Pana/nrm):

```bash
nrm add jd http://registry.m.jd.com
nrm use jd
```

然后执行以下命令安装。如果已安装，请确认@jdcfe/butler 最低 0.1.5 版本

```bash
npm install -g @jdcfe/butler
```

初始化新项目

```bash
butler init butler-yep-react-demo
// or
br init butler-yep-react-demo
```

工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖。

然后我们进入项目并启动。

```bash
$ cd butler-yep-react-demo
$ butler start
```

此时使用浏览器访问 http://127.0.0.1:3000/app.html ，看到界面就算成功了。

## 引入 Yep-React

现在从 yarn 或 npm 安装并引入 Yep-React。

```bash
$ yarn add @jdcfe/yep-react
```

修改 `src/js/pages/app.jsx`，引入 Yep-React 的按钮组件。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/app.scss';
import Button from '@jdcfe/yep-react/lib/button';
import '@jdcfe/yep-react/lib/button/style';

ReactDOM.render(
  <div className="demo-template">
    <Button type={'primary'}>Yep-react</Button>
  </div>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
```

根目录新增 `postcss.config.js`文件

```bash
$ yarn add -D  postcss-pxtorem
```

```js
const pxtorem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
  ],
};
```

修改 `src/html/app.html`,在 head 中添加如下

```css
<style>
  @media screen and (min-width: 320px) { /*no*/
    html {
      font-size: calc(42.67px + 2 * (100vw - 320px) / 55); /*no*/
    }
  }

  @media screen and (min-width: 375px) {
    html {
      font-size: calc(50px + 2 * (100vw - 375px) / 39); /*no*/
    }
  }

  @media screen and (min-width: 414px) {
    html {
      font-size: calc(55.2px + 4 * (100vw - 414px) / 186); /*no*/
    }
  }

  @media screen and (min-width: 600px) {
    html {
      font-size: calc(80px + 4 * (100vw - 600px) / 150); /*no*/
    }
  }

  @media screen and (min-width: 750px) {
    html {
      font-size: calc(100px + 6 * (100vw - 1000px) / 1000); /*no*/
    }
  }

</style>
```

好了，现在你应该能看到页面上已经有了 Yep-React 的按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 butler [官方文档](http://butler.jd.com/#/)。

## 高级配置

我们现在已经把组件成功运行起来了，但是在实际开发过程中还有很多问题，例如上面的例子实际上加载了全部的 Yep-React 组件的样式（对前端性能是个隐患）。

此时我们需要对 butler 的默认配置进行自定义。

### 使用 babel-plugin-import

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一个用于按需加载组件代码和样式的 babel 插件，现在我们尝试安装它并在项目根目录新增 `.babelrc` 文件。

```bash
$ yarn add -D babel-plugin-import
```

```.babelrc
{
  "plugins": [
    ["import", { "libraryName": "@jdcfe/yep-react", "style": true }]
  ]
}
```

然后移除前面在 `src/js/pages/app.jsx` 里添加的 `@jdcfe/yep-react/lib/button/style` Button 组件样式代码，并且按下面的格式引入模块。

```diff
  // src/App.js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import '../../css/app.scss';
- import Button from '@jdcfe/yep-react/lib/button';
- import '@jdcfe/yep-react/lib/button/style';
+ import { Button } from '@jdcfe/yep-react';

  ReactDOM.render(
    <div className="demo-template">
      <Button type={'primary'}>Yep-react</Button>
    </div>,
    document.getElementById('app'),
  );

  if (module.hot) {
    module.hot.accept();
  }
```

最后重启 `butler start` 访问页面，Yep-React 组件的 js 和 css 代码都会按需加载，你在控制台也不会看到这样的[警告信息](https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png)。关于按需加载的原理和其他方式可以阅读[这里](#/docs/react/getting-started#按需加载)。

### 自定义主题

按照 [配置主题](#/doc/customize-theme) 的要求，自定义主题需要用到 scss 变量覆盖功能。

根目录新增`sassloader.option.config.js`

定制主题较少时

```js
module.exports = {
  option: {
    data: '$brand-primary:#2A83E1;',
  },
};
```

或者定制主题较多时

```js
const theme = ['$brand-primary:#2A83E1;', '$button-height:100px;'];

module.exports = {
  option: {
    data: theme.join(' '),
  },
};
```

这里利用了 [scss-loader](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_default) 的 `options data` 来进行主题配置，变量和其他配置方式可以参考 [配置主题](#/doc/customize-theme) 文档。

修改后重启 `butler start`，如果看到一个蓝色的按钮就说明配置成功了。

在线示例

* [butler-yep-react](http://git.jd.com/zhaohongyang1/butler-yep-react)
