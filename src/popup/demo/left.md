---
order: 3
title: 从左向右显示
description:
---

```js
import React from 'react';
import {Popup, Button} from '@jdcfe/yep-react';
class Demo extends React.PureComponent {
  state = {
    slideRightShow: false,
  };

  handleToggleSlideRightShow = () => {
    this.setState({
      slideRightShow: !this.state.slideRightShow,
    });
  };

  render() {
    return (
      <div title="Popup">
        <Button onClick={this.handleToggleSlideRightShow}>从左向右显示</Button>

        <Popup show={this.state.slideRightShow} onCancel={this.handleToggleSlideRightShow} popupTransition="slide-left">
          <div className="left" />
        </Popup>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
