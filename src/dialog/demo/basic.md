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
  onClose = () => {
    if (this.confirmInstance) {
      this.confirmInstance.close();
    }
  };

  render() {
    const obj = {
      className: '123',
    };
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
            this.confirmInstance = Dialog.confirm(
              '标题',
              <div>
                <div>确定要加入购物车吗？</div>
                <Button size="sm" inline type="ghost" onClick={this.onClose}>
                  自定义关闭按钮
                </Button>
              </div>,
              []
            );
          }}
        >
          自定义关闭
        </Button>
        <WhiteSpace />
        <Button
          onClick={() => {
            Dialog.confirm('标题', '确定要删除吗?', [{text: '好的', onClick: () => console.log('好的')}], obj);
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
