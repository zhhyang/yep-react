---
order: 4
title: 复选框组
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Checkbox, WhiteSpace} from '@jdcfe/yep-react';
const {CheckBoxGroup} = Checkbox;
class Demo extends React.PureComponent {
  state = {
    value: ['1', '4'],
  };
  onChange = value => {
    this.setState({
      value,
    });
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
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
