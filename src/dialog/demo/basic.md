---
order: 0
title: 基础用法
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
          基础用法
        </Button>

        <Dialog
          show={this.state.show}
          maskCloseable
          onClose={() => {
            this.setState({show: false});
          }}
        >
          <div className={`Yep-dialog-alert-content`}>123</div>
        </Dialog>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
