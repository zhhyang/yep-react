---
order: 1
title: 带徽章
description:
---

```js
import React from 'react';
import {Tabs, Badge} from '@jdcfe/yep-react';
const {TabPanel} = Tabs;
class Demo extends React.PureComponent {
  render() {
    return (
      <Tabs>
        <TabPanel tab={<Badge text={'3'}>选项卡一</Badge>}>
          <div
            style={{
              height: 150,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
            }}
          >
            选项卡一内容
          </div>
        </TabPanel>
        <TabPanel tab={<Badge text={'今日(20)'}>选项卡二</Badge>}>
          <div
            style={{
              height: 150,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
            }}
          >
            选项卡二内容
          </div>
        </TabPanel>
        <TabPanel tab={<Badge dot>选项卡三</Badge>}>
          <div
            style={{
              height: 150,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
            }}
          >
            选项卡三内容
          </div>
        </TabPanel>
      </Tabs>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
