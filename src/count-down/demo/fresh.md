---
order: 3
title: 重新刷新剩余时间
description: 刷新剩余时间，重新倒计时
---

```js
import React from 'react';
import {CountDown, Button} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    left: 100000,
  };
  render() {
    return (
      <div>
        <CountDown
          leftTime={this.state.left}
          onChange={value =>
            this.setState({
              left: value,
            })
          }
        />
        <Button
          onClick={() => {
            console.log('123');
            this.setState({
              left: 5,
            });
          }}
        >
          重置
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
