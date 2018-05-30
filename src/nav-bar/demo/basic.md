---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {NavBar, WhiteSpace} from '@jdcfe/lrc-m';

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
          share
        >
          页面标题
        </NavBar>
        <WhiteSpace />
        <NavBar leftIcon={null} leftContent="返回" share>
          页面标题
        </NavBar>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
