---
order: 4
title: 垂直样式
description: 通过设置tabBarPosition为left，tabDirection为vertical将tab放置在左侧并垂直排列。
---

```js
import React from 'react';
import {Tabs} from '@jdcfe/yep-react';
const {TabPanel} = Tabs;
class Demo extends React.PureComponent {
  render() {
    return (
      <div style={{height: 150}}>
        <Tabs tabBarPosition="left" tabDirection="vertical">
          <TabPanel tab="选项卡一">
            <div
              style={{
                height: 200,
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
                height: 200,
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
                height: 200,
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
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
