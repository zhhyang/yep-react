---
order: 0
title: 基础用法
description: 基础用法
---

```js
import React from 'react';
import {TabsBar, Badge} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <TabsBar>
          <TabsBar.Item tab="新冠肺炎疫苗" />
          <TabsBar.Item tab={<Badge text={'3'}>成人流感疫苗</Badge>} />
          <TabsBar.Item tab="狂犬疫苗" />
          <TabsBar.Item tab="二价HPV" />
          <TabsBar.Item tab="乙肝疫苗" />
          <TabsBar.Item tab="十三价肺炎疫苗" />
          <TabsBar.Item tab="五联疫苗" />
          <TabsBar.Item tab="麻腮风疫苗" />
        </TabsBar>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
