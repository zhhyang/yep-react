---
order: 1
title: ActionSheet 删除
description: 移除购物车示例
---

```js
import React from 'react';
import {ActionSheet, Stepper} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    max: 99,
    min: 1,
    show: false,
    value: 1,
  };
  removeItem = () => {
    alert('执行删除操作');
    this.hideAction();
  };
  showAction = () => {
    this.setState({
      show: true,
    });
  };
  hideAction = () => {
    this.setState({
      show: false,
      value: this.state.min,
    });
  };
  render() {
    const {max, min, show, value} = this.state;
    const props = {
      max,
      min,
      value,
      onChange: value => this.setState({value}),
      onLess: value => {
        if (value === 0) {
          this.setState({
            show: true,
          });
        }
      },
    };
    return (
      <div>
        <Stepper {...props} />
        <ActionSheet
          show={this.state.show}
          onCancel={this.hideAction}
          hasCancel
          space
          title="确定从购物车中删除此商品？"
          data={['确定']}
          itemClick={(value, index) => {
            this.removeItem();
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
