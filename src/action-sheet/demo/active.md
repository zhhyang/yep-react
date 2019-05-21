---
order: 2
title: 打开时选中已选择的选项
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
        <Button onClick={this.handleToggleShow}>选中已选择的选项</Button>

        <ActionSheet
          show={this.state.show}
          onCancel={this.handleToggleShow}
          hasCancel
          space
          active={1}
          title="婚姻状况"
          data={['未婚', '已婚', '离异']}
          itemClick={(value, index) => Toast.show(value)}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
