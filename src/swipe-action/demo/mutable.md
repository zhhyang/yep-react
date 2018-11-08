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
        {new Array(1).fill(0).map((address, index) => (
          <SwipeAction
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
                  ]
                : []
            }
          >
            <div style={{padding: '0.14rem', fontSize: '0.32rem'}}>地址</div>
          </SwipeAction>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
