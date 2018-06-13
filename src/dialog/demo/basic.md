---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Dialog, Button, WhiteSpace} from '@jdcfe/yep-react';

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
          Dialog
        </Button>
        <WhiteSpace />
        <Button
          onClick={() => {
            Dialog.confirm('标题', '确定要删除吗?');
          }}
        >
          Confirm
        </Button>
        <WhiteSpace />
        <Button
          onClick={() => {
            Dialog.confirm('标题', '确定要删除吗?', [{text: '好的', onClick: () => console.log('好的')}]);
          }}
        >
          Alert
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
