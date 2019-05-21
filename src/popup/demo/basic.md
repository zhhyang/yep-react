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
          显示
        </Button>

        <Popup show={this.state.show} onCancel={this.handleToggleShow}>
          <div className="ul">
            <div
              className="cur"
              onClick={() => {
                alert('未婚');
              }}
            >
              未婚
            </div>
            <div
              className=""
              onClick={() => {
                alert('已婚');
              }}
            >
              已婚
            </div>
            <div
              className=""
              onClick={() => {
                alert('离异');
              }}
            >
              离异
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
