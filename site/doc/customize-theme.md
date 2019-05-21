---
order: 3
title: 定制主题
---

Yep-React 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。

## 样式变量

Yep-React 的样式使用了 [scss](http://sass-lang.com/) 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

* [默认样式变量](https://github.com/jdf2e/yep-react/blob/master/src/style/variables.scss)

## 定制方式

我们使用 [options data](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_default) 的方式来覆盖变量。

### 1) data 属性 字符串

* 首先，你的项目里需要包含如下依赖 `babel-plugin-import node-sass sass-loader style-loader css-loader` 。

```bash
  npm install --save-dev babel-plugin-import babel-plugin-import node-sass sass-loader style-loader css-loader
```

* 配置 babel-plugin-import 确保加载 Yep-React scss 文件

```javascript
{
    ...
    "plugins": [
        ["import", {"libraryName": "@jdcfe/yep-react", "style": true}],
        ...
    ]
}
```

* 在 `webpack` 配置文件中添加 scss 文件的 sass-loader 处理，在 options 选项里面将包含所有我们想要修改的主题样式。[全部主题样式参考这里](https://github.com/jdf2e/yep-react/blob/master/src/style/variables.scss)

```javascript
  {
    test: /\.scss$/,
    use: [
        ...,
        {
            loader: require.resolve('sass-loader'),
            options: {
                data: '$brand-primary:#c23e25;',//定制修改品牌首选色

            }
        }
    ],
},
```

* 最后，在你的 webpack （版本 3.0+） 配置文件里，添加如上配置，之后运行你的 `npm start`。

> 不同版本的 webpack loader 配置方法有差异，请查看 webpack 官方文档

### 2) theme.json

用 json 文件进行变量覆盖。

创建一个单独的 `theme.json` 文件如下，再引入这个文件。

```json
["$brand-primary:#2A83E1;", "$button-height:100px;"]
```

```javascript
const theme = require('theme.json')

{
    test: /\.scss$/,
    use: [
        ...,
        {
            loader: require.resolve('sass-loader'),
            options: {
                data: theme.join(' '),
            }
        }
    ],
},
```
