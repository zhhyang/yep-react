---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Tabs} from '@jdcfe/lrc-m';
const {TabPanel} = Tabs;
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Tabs>
          <TabPanel tab="1">
            <div>1</div>
          </TabPanel>
          <TabPanel tab="2">
            <div>2</div>
          </TabPanel>
          <TabPanel tab="3">
            <div>3</div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
