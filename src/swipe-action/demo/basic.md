---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {SwipeAction, List} from '@jdcfe/lrc-m';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <SwipeAction
          style={{backgroundColor: 'gray'}}
          autoClose
          right={[
            {
              text: '取消',
              onClick: () => console.log('cancel'),
              style: {backgroundColor: '#ddd', color: 'white'},
            },
            {
              text: '删除',
              onClick: () => console.log('delete'),
              style: {backgroundColor: '#F4333C', color: 'white'},
            },
          ]}
          left={[
            {
              text: '提交',
              onClick: () => console.log('reply'),
              style: {backgroundColor: '#108ee9', color: 'white'},
            },
            {
              text: '取消',
              onClick: () => console.log('cancel'),
              style: {backgroundColor: '#ddd', color: 'white'},
            },
          ]}
          onOpen={() => console.log('global open')}
          onClose={() => console.log('global close')}
        >
          <List.Item extra="More" arrow="horizontal" onClick={e => console.log(e)}>
            Have left and right buttons
          </List.Item>
        </SwipeAction>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
