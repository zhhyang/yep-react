---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {NavBar, WhiteSpace, Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
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
        <WhiteSpace />
        <NavBar leftContent="返回" rightContent={<Icon type="lego_gengduo" />}>
          页面标题
        </NavBar>
        <WhiteSpace />
        <NavBar leftIcon={null} leftContent="取消" rightContent="操作">
          页面标题
        </NavBar>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
