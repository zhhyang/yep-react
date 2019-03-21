---
order: 1
title: 可滑动
description:
---

```js
import React from 'react';
import {Tabs, WhiteSpace, Badge} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';
const {TabPanel, DefaultTabBar} = Tabs;
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <ComponentCard title="可滑动">
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
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
