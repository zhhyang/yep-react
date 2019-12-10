---
order: 5
title: 复选框组全选
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Checkbox, WhiteSpace, Button} from '@jdcfe/yep-react';
const {CheckBoxGroup} = Checkbox;
class Demo extends React.PureComponent {
  state = {
    value: [],
    checkAll: false,
  };
  onChange = value => {
    this.setState({
      value,
    });
  };
  onClick = () => {
    if (this.state.checkAll) {
      this.setState({
        value: [],
        checkAll: false,
      });
    } else {
      this.setState({
        value: ['1', '2', '3', '4'],
        checkAll: true,
      });
    }
  };

  render() {
    return (
      <div>
        <CheckBoxGroup value={this.state.value} onChange={this.onChange}>
          <Checkbox value={'1'}>选项1</Checkbox>
          <WhiteSpace />
          <Checkbox value={'2'}>选项2</Checkbox>
          <WhiteSpace />
          <Checkbox value={'3'}>选项3</Checkbox>
          <WhiteSpace />
          <Checkbox value={'4'}>选项4</Checkbox>
        </CheckBoxGroup>
        <Button onClick={this.onClick}>{this.state.checkAll && '取消'}全选</Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
