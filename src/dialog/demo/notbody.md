---
order: 4
title: 挂载在内部节点
description:
---

```js
import React from 'react';
import {Dialog, Button} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    show: false,
  };

  render() {
    return (
      <div title="Dialog">
        <Button
          onClick={() => {
            this.setState({show: true});
          }}
        >
          挂载在内部节点
        </Button>

        <Dialog
          show={this.state.show}
          maskCloseable
          usePortal={false}
          onClose={() => {
            this.setState({show: false});
          }}
        >
          <div className={`Yep-dialog-alert-content`}>你看看是不是没在body节点下呢</div>
        </Dialog>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
