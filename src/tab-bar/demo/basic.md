---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {TabBar} from '@jdcfe/lrc-m';
const {Tab} = TabBar;

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <TabBar>
          <Tab icon="//placehold.it/24x24" title="首页" selectedIcon="//placehold.it/24x24" selected />
          <Tab icon="//placehold.it/24x24" title="我的" selectedIcon="//placehold.it/24x24" />
          <Tab icon="//placehold.it/24x24" title="他的" selectedIcon="//placehold.it/24x24" />
          <Tab icon="//placehold.it/24x24" title="和的" selectedIcon="//placehold.it/24x24" />
        </TabBar>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
