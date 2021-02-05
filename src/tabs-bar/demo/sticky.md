---
order: 1
title: 吸顶
description: 吸顶
---

```js
import React from 'react';
import {TabsBar} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <TabsBar sticky>
          <TabsBar.Item tab="新冠肺炎疫苗" />
          <TabsBar.Item tab="成人流感疫苗" />
          <TabsBar.Item tab="狂犬疫苗" />
          <TabsBar.Item tab="二价HPV" />
          <TabsBar.Item tab="乙肝疫苗" />
          <TabsBar.Item tab="十三价肺炎疫苗" />
          <TabsBar.Item tab="五联疫苗" />
          <TabsBar.Item tab="麻腮风疫苗" />
        </TabsBar>
        <div
          style={{
            height: 1500,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}
        >
          填充内容
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
