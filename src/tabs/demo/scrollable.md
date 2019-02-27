---
order: 1
title: 可滑动
description:
---

```js
import React from 'react';
import {Tabs, WhiteSpace, Badge} from '@jdcfe/yep-react';
const {TabPanel, DefaultTabBar} = Tabs;
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="demo-title">可滑动</div>
        <Tabs
          onChange={index => {
            console.log(index);
          }}
          distanceToChangeTab={100}
          renderTabBar={props => <DefaultTabBar {...props} page={6} />}
        >
          {new Array(20).fill('1').map((item, index) => (
            <TabPanel tab={`选项卡${index + 1}`} key={index}>
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
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
