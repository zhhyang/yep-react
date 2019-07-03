---
category: Form
title: 图片上传选择器
description: 支持图片选择，上传和删除，支持自定义图片大小，新增和删除图片时可自定义处理函数。
---

<DEMO>

| 参数           | 说明                                      | 类型     | 默认值 |
| -------------- | ----------------------------------------- | -------- | ------ |
| files          | 图片对象数组，每个对象必须包含 url 属性   | array    | []     |
| width          | 图片宽度，比如"80px", "2rem"，单位默认 px | string   | 75px   |
| height         | 图片高度，比如"80px", "2rem"，单位默认 px | string   | 75px   |
| formDataAction | 新增图片后的处理函数                      | function | ()=>{} |
| removeImage    | 删除图片后的处理函数                      | function | ()=>{} |
