---
order: 0
title: 基础用法
description: 常与弹框、选择器等配合使用。
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Mask, Button} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    show: false,
  };

  handleToggleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleToggleShow}>
          显示
        </Button>
        {this.state.show && <Mask onClick={this.handleToggleShow} />}
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
