---
order: 1
title: 从上向下显示
description:
---

```js
import React from 'react';
import {Popup, Button} from '@jdcfe/yep-react';
class Demo extends React.PureComponent {
  state = {
    slideDownShow: false,
  };

  handleToggleSlideDownShow = () => {
    this.setState({
      slideDownShow: !this.state.slideDownShow,
    });
  };

  render() {
    return (
      <div title="Popup">
        <Button onClick={this.handleToggleSlideDownShow}>从上向下显示</Button>
        <Popup show={this.state.slideDownShow} onCancel={this.handleToggleSlideDownShow} popupTransition="slide-down">
          <div className="up">
            <div
              className="cur"
              onClick={() => {
                alert('未婚');
              }}
            >
              未婚
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
