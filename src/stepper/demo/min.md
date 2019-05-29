---
order: 1
title: 最少 2 件起购
description:
---

```js
import React from 'react';
import {Stepper, Toast} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  callback = null;
  state = {
    min: 2,
    show: false,
  };
  handleToggleShow = () => {
    this.setState(
      {
        show: !this.state.show,
      },
      () => {
        if (!this.state.show) {
          this.callback();
        }
      }
    );
  };
  render() {
    const min = 2;
    return (
      <div>
        <Stepper
          min={min}
          onChange={n => console.log(n)}
          onLess={(remove, callback) => {
            if (remove) {
              this.handleToggleShow();
              this.callback = callback;
            } else {
              Toast.show(`最少购买${min}件哦!`);
            }
          }}
        />
        <ActionSheet
          show={this.state.show}
          onCancel={this.handleToggleShow}
          hasCancel
          space
          title="确定从购物车中删除此商品？"
          data={['确定']}
          itemClick={(value, index) => {
            this.handleToggleShow();
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
