---
order: 4
title: 在rocketact中使用
---

[rocketact](https://rocketact.js.org/) 🚀 Developing React projects with ease。

---

## Usage

With [`npx`](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner), run:

```bash
npx rocketact create my-awesome-project
```

Or you can install `rocketact` globaly:

```bash
npm install -g rocketact
rocketact create my-awesome-project
cd my-awesome-project
```

More info please refer to [Rocketact website](https://rocketact.js.org/).

### Available Scripts

#### Start

> Start local development environment

```bash
yarn start
# or
npm start
```

#### Build

> Perform a production build

```bash
yarn build
# or
npm run build
```

## 引入 Yep-React

现在从 yarn 或 npm 安装并引入 Yep-React。

```bash
$ yarn add @jdcfe/yep-react
```

修改 `src/pages/app.tsx`，引入 Yep-React 的按钮组件。

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './app.scss';

import {Button} from '@jdcfe/yep-react';

ReactDOM.render(
  <div className="App">
    <Button>Hello World</Button>
  </div>,
  document.getElementById('app') as HTMLElement
);
```

根目录修改 `postcss.config.js`文件

```bash
$ yarn add -D  postcss-pxtorem
```

```js
const autoprefixer = require('autoprefixer');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const pxtorem = require('postcss-pxtorem');
module.exports = {
  ident: 'postcss',
  plugins: [
    postcssFlexbugsFixes,
    autoprefixer({
      flexbox: 'no-2009',
    }),
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
  ],
};
```

修改 `src/pages/app.html`,在 head 中添加如下

```html
<script>
  function flexible() {
    var e = document.documentElement.clientWidth || document.body.clientWidth;
    750 < e && (e = 750);
    var t = (e / 7.5).toFixed(2);
    document.documentElement.style.fontSize = t + 'px';
  }
  window.addEventListener(
    'resize',
    function() {
      flexible();
    },
    !1
  ),
    flexible();
</script>
```

### 使用 babel-plugin-import 实现按需加载

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一个用于按需加载组件代码和样式的 babel 插件，现在我们尝试安装它并在项目 package.json 新增 babel 配置。

```bash
$ yarn add -D babel-plugin-import
```

```package.json
  "babel": {
    "plugins": [
      [
        "import",
        {
          "libraryName": "@jdcfe/yep-react",
          "style": true
        },
        "@jdcfe/yep-react"
      ]
    ]
  }
```

好了，现在你应该能看到页面上已经有了 Yep-React 的按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 rocketact [官方文档](https://rocketact.js.org/)。

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

- [butler-yep-react](http://git.jd.com/zhaohongyang1/butler-yep-react)
