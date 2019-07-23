---
order: 1
title: 透明遮罩层
description: 透明遮罩常与顶部导航下拉快捷入口配合使用
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Mask, Button} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    transparentShow: false,
  };

  handleToggleTransparentShow = () => {
    this.setState({
      transparentShow: !this.state.transparentShow,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleToggleTransparentShow}>
          透明遮罩{this.state.transparentShow ? '已' : '未'}打开
        </Button>
        {this.state.transparentShow && <Mask transparent onClick={this.handleToggleTransparentShow} />}
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
