---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Dialog, Button, WhiteSpace} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

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
        <ComponentCard title="基础用法">
          <Button
            onClick={() => {
              this.setState({show: true});
            }}
          >
            Dialog
          </Button>
        </ComponentCard>
        <ComponentCard title="Confirm">
          <Button
            onClick={() => {
              Dialog.confirm('标题', '确定要删除吗?');
            }}
          >
            Confirm
          </Button>
        </ComponentCard>
        <ComponentCard title="自定义关闭">
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
        </ComponentCard>
        <ComponentCard title="Alert">
          <Button
            onClick={() => {
              Dialog.confirm('标题', '确定要删除吗?', [{text: '好的', onClick: () => console.log('好的')}], obj);
            }}
          >
            Alert
          </Button>
        </ComponentCard>

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
