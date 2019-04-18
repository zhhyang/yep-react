---
order: 1
title: 带取消按钮
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {ActionSheet, Button} from '@jdcfe/yep-react';

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
        <Button onClick={this.handleToggleShow}>显示取消按钮</Button>

        <ActionSheet
          show={this.state.show}
          onCancel={this.handleToggleShow}
          hasCancel
          space
          data={['未婚', '已婚', '离异']}
          itemClick={(value, index) => {
            this.handleToggleShow();
            Toast.show(value);
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
