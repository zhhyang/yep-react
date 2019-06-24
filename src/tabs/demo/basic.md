---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Tabs} from '@jdcfe/yep-react';
const {TabPanel} = Tabs;
class Demo extends React.PureComponent {
  render() {
    return (
      <Tabs
        onChange={index => {
          console.log(index);
        }}
        distanceToChangeTab={100}
      >
        <TabPanel tab="选项卡一">
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
        <TabPanel tab="选项卡二">
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
        <TabPanel tab="选项卡三">
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
