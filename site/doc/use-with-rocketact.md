---
order: 4
title: 在rocketact中使用
---

[rocketact](https://rocketact.js.org/) 🚀 Developing React projects with ease。

---

## 使用

使用 [`npx`](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner), 运行:

```bash
npx rocketact create my-awesome-project
```

或者全局安装 `rocketact` :

```bash
npm install -g rocketact
rocketact create my-awesome-project
cd my-awesome-project
```

更多请点击 [Rocketact website](https://rocketact.js.org/).

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

## 安装 rocketact-plugin-yep-react

```bash
$ yarn add -D rocketact-plugin-yep-react
```

## 修改 app.html

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

好了，现在你应该能看到页面上已经有了 Yep-React 的按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 rocketact [官方文档](https://rocketact.js.org/)。

## 在线示例

- [rockact-yep-react](https://github.com/jdf2e/rockact-yep-react)
