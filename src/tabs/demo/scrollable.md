---
order: 5
title: 超出可滑动
description: 超出给定区域后，支持滑动，选中某一tab标签可切换到对应的区域。
---

```js
import React from 'react';
import {Tabs} from '@jdcfe/yep-react';
const {TabPanel, DefaultTabBar} = Tabs;
class Demo extends React.PureComponent {
  render() {
    return (
      <Tabs
        onChange={index => {
          console.log(index);
        }}
        distanceToChangeTab={100}
        renderTabBar={props => <DefaultTabBar {...props} page={6} />}
      >
        {new Array(20).fill('1').map((item, index) => (
          <TabPanel tab={`tab${index + 1}`} key={index}>
            <div
              style={{
                height: 150,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
              }}
            >
              {`选项卡${index + 1}`}内容
            </div>
          </TabPanel>
        ))}
      </Tabs>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
