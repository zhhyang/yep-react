---
order: 1
title: 动态改变
description:
---

```js
import React from 'react';
import {SwipeAction, List} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    default: 1,
  };

  render() {
    return (
      <div>
        {new Array(4).fill(0).map((address, index) => (
          <SwipeAction
            style={{backgroundColor: 'gray'}}
            autoClose
            right={
              this.state.default !== index
                ? [
                    {
                      text: '设为默认',
                      className: 'demo-btn',
                      onClick: () => {
                        this.setState({default: index});
                      },
                      style: {backgroundColor: '#ddd', color: 'white'},
                    },
                    {
                      text: '删除',
                      className: 'demo-btn',
                      onClick: () => console.log('delete'),
                      style: {backgroundColor: '#F4333C', color: 'white'},
                    },
                  ]
                : [
                    {
                      text: '删除',
                      className: 'demo-btn',
                      onClick: () => console.log('delete'),
                      style: {backgroundColor: '#F4333C', color: 'white'},
                    },
                  ]
            }
          >
            <List.Item extra="左滑操作" arrow="horizontal" onClick={e => console.log(e)}>
              地址
            </List.Item>
          </SwipeAction>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
