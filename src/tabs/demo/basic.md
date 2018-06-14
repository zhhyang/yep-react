---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Tabs, WhiteSpace, Badge} from '@jdcfe/lrc-m';
const {TabPanel} = Tabs;
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="demo-title">基本</div>
        <Tabs>
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
        <WhiteSpace />
        <div className="demo-title">基本</div>
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
        <WhiteSpace />
        <div className="demo-title">底部</div>
        <Tabs tabBarPosition="bottom">
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
        <WhiteSpace />
        <div className="demo-title">无动画</div>
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
        <WhiteSpace />
        <div className="demo-title">垂直样式</div>
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
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
