---
order: 4
title: 其他
description:
---

```js
import React from 'react';
import {List} from '@jdcfe/yep-react';
const {Item} = List;

class Demo extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      disabled: false,
    };
  }

  render() {
    return (
      <div>
        <List renderHeader={() => 'Other'} className="my-list">
          <Item
            disabled={this.state.disabled}
            extra=""
            onClick={() => {
              console.log('click', this.state.disabled);
              this.setState({disabled: !this.state.disabled});
            }}
          >
            禁用
          </Item>
          <Item>
            <select defaultValue="1">
              <option value="1">Select选择</option>
              <option value="2" disabled>
                Unable to select
              </option>
              <option value="3">option 3</option>
            </select>
          </Item>
        </List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
