---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Mask, Button, WhiteSpace} from '@jdcfe/lrc-m';

class Demo extends React.PureComponent {
  state = {
    show: false,
    transparentShow: false,
  };

  handleToggleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleToggleTransparentShow = () => {
    this.setState({
      transparentShow: !this.state.transparentShow,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleToggleShow}>
          显示
        </Button>
        <WhiteSpace />
        <Button onClick={this.handleToggleTransparentShow}>显示透明遮罩</Button>
        <WhiteSpace />
        {this.state.show && <Mask onClick={this.handleToggleShow} />}
        {this.state.transparentShow && <Mask transparent onClick={this.handleToggleTransparentShow} />}
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
