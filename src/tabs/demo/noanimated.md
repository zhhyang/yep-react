---
order: 3
title: 切换无动画
description: 通过设置animated={false}，当切换tab时，去除动画效果。
---

```js
import React from 'react';
import {Tabs} from '@jdcfe/yep-react';
const {TabPanel} = Tabs;
class Demo extends React.PureComponent {
  render() {
    return (
      <Tabs animated={false}>
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
