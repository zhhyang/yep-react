---
order: 6
title: TabBar吸顶
description: 配合Sticky实现滑动时TabBar吸顶
---

```js
import React from 'react';
import {Tabs, Sticky} from '@jdcfe/yep-react';
const {TabPanel} = Tabs;
class Demo extends React.PureComponent {
  render() {
    return (
      <Sticky.StickyContainer>
        <Tabs
          ref={node => (this.tabs = node)}
          onChange={index => {
            console.log(index);
          }}
          distanceToChangeTab={100}
          renderTabBar={props => <Sticky>{({style}) => <Tabs.DefaultTabBar {...props} style={style} />}</Sticky>}
        >
          <TabPanel tab="选项卡一">
            <div
              style={{
                height: 1500,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
              }}
            >
              <a>选项卡一内容</a>
            </div>
          </TabPanel>
          <TabPanel tab="选项卡二">
            <div
              style={{
                height: 1500,
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
                height: 1500,
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
      </Sticky.StickyContainer>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
