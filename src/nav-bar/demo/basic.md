---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {NavBar, Icon} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <ComponentCard title="基础用法">
          <NavBar leftContent="返回" rightContent={<Icon type="lego_gengduo" />}>
            页面标题
          </NavBar>
        </ComponentCard>
        <ComponentCard title="配置关闭按钮">
          <NavBar
            leftContent="返回"
            close
            onCloseClick={() => {
              console.log('close');
            }}
            share={<Icon type="share" />}
            rightContent={<Icon type="lego_gengduo" />}
          >
            页面标题
          </NavBar>
        </ComponentCard>
        <ComponentCard title="无图标模式">
          <NavBar leftIcon={null} leftContent="取消" rightContent="操作">
            页面标题
          </NavBar>
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
