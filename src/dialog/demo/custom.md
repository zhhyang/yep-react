---
order: 2
title: 自定义关闭
description:
---

```js
import React from 'react';
import {Dialog, Button} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  onClose = () => {
    if (this.confirmInstance) {
      this.confirmInstance.close();
    }
  };

  render() {
    return (
      <div title="Dialog">
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
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
