---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Popup, Button} from '@jdcfe/yep-react';
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
      <div title="Popup">
        <Button type="primary" onClick={this.handleToggleShow}>
          从下向上显示
        </Button>

        <Popup show={this.state.show} onCancel={this.handleToggleShow}>
          <div className="up" />
        </Popup>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
