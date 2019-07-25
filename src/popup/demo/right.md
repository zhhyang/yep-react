---
order: 2
title: 从右向左显示
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
        <Button type="primary" onClick={this.handleToggleSlideRightShow}>
          从右向左显示
        </Button>

        <Popup
          show={this.state.slideRightShow}
          onCancel={this.handleToggleSlideRightShow}
          popupTransition="slide-right"
        >
          <div className="right" />
        </Popup>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
