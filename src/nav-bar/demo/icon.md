---
order: 1
title: 配置按钮
description:
---

```js
import React from 'react';
import {NavBar, Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
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
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
