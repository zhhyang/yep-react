---
order: 5
title: 可输入列表
description: 可配置输入框、滑动开关、步进器等表单元素。
---

```js
import React from 'react';
import {List, Button, Switch, Stepper} from '@jdcfe/yep-react';
const {Item} = List;

class Demo extends React.PureComponent {
  state = {
    checked: false,
    max: 99,
    min: 1,
    value: 1,
  };

  render() {
    const {max, min, value} = this.state;
    const stepperProps = {
      max: max,
      min: min,
      value: value,
      onChange: value => this.setState({value}),
    };
    return (
      <div>
        <List renderHeader={() => 'Input Style'} className="my-list">
          <Item
            extra={<Switch currentStatus={this.state.checked} handleSwitch={checked => this.setState({checked})} />}
          >
            Confirm Infomation
          </Item>
          <Item extra={<input type="text" placeholder="please input account" />} className={'custom-item-style'}>
            Account
          </Item>
          <Item extra={<Stepper {...stepperProps} />}>Number of Subscribers</Item>
          <Item>
            <Button type="primary" size="small" inline onClick={() => alert('Submit')}>
              Submit
            </Button>
            <Button size="small" inline style={{marginLeft: '2.5px'}} onClick={() => alert('Reset')}>
              Reset
            </Button>
          </Item>
        </List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
