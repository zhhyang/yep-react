---
order: 1
title: 可输入列表
description:
---

```js
import React from 'react';
import {List, Button, Switch} from '@jdcfe/lrc-m';
const {Item} = List;

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <List renderHeader={() => 'Input Style'} className="my-list">
          <Item extra={<Switch />}>Confirm Infomation</Item>
          <Item extra={<input />}>Account</Item>
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
