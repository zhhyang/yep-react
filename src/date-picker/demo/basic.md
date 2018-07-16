---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {DatePicker, Button} from '@jdcfe/yep-react';
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
class Demo extends React.PureComponent {
  state = {
    show: false,
    date: now,
    time: now,
    utcDate: utcNow,
    dpValue: null,
    customChildValue: null,
    visible: false,
  };
  render() {
    return (
      <div>
        <Button onClick={() => this.setState({show: true})}>选择时间</Button>
        <DatePicker
          mode={'date'}
          show={this.state.show}
          value={this.state.date}
          onOk={() => this.setState({show: false})}
          onCancel={() => this.setState({show: false})}
          onChange={date => this.setState({date})}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
