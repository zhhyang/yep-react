---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {SwipeAction, List} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <SwipeAction
          style={{backgroundColor: 'gray'}}
          autoClose
          right={[
            {
              text: '置顶商品',
              className: 'demo-btn',
              onClick: () => console.log('cancel'),
              style: {backgroundColor: '#ddd', color: 'white'},
            },
            {
              text: '取消关注',
              className: 'demo-btn',
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
          onMovingDistance={distance => console.log(distance)}
        >
          <List.Item extra="滑" arrow="horizontal" onClick={e => console.log(e)}>
            左右两侧都有按钮
          </List.Item>
        </SwipeAction>
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
          onOpen={() => console.log('global open')}
          onClose={() => console.log('global close')}
        >
          <List.Item extra="滑" arrow="horizontal" onClick={e => console.log(e)}>
            只有右侧有按钮
          </List.Item>
        </SwipeAction>
        <SwipeAction
          style={{backgroundColor: 'gray'}}
          autoClose
          left={[
            {
              text: '提交',
              onClick: () => console.log('reply'),
              style: {backgroundColor: '#F4333C', color: 'white'},
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
          <List.Item extra="滑" arrow="horizontal" onClick={e => console.log(e)}>
            只有左侧有按钮
          </List.Item>
        </SwipeAction>
        <SwipeAction
          style={{backgroundColor: 'gray'}}
          autoClose
          right={[
            {
              text: '短',
              onClick: () => console.log('reply'),
              style: {backgroundColor: '#ddd', color: 'white'},
            },
            {
              text: '长按钮',
              onClick: () => console.log('cancel'),
              style: {backgroundColor: '#F4333C', color: 'white'},
            },
          ]}
          onOpen={() => console.log('global open')}
          onClose={() => console.log('global close')}
        >
          <List.Item extra="滑" arrow="horizontal" onClick={e => console.log(e)}>
            不同宽度的按钮
          </List.Item>
        </SwipeAction>
        <SwipeAction
          style={{backgroundColor: 'gray'}}
          autoClose
          right={[
            {
              text: '一个按钮',
              onClick: () => console.log('cancel'),
              style: {backgroundColor: '#ec3838', color: 'white'},
            },
          ]}
          onOpen={() => console.log('global open')}
          onClose={() => console.log('global close')}
        >
          <List.Item extra="滑" arrow="horizontal" onClick={e => console.log(e)}>
            只有一个按钮
          </List.Item>
        </SwipeAction>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
