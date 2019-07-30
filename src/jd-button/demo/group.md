---
order: 2
title: 均分按钮
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {JdButton} from '@jdcfe/yep-react';
const {JdButtonGroup} = JdButton;
class Demo extends React.PureComponent {
  render() {
    return (
      <div style={{backgroundColor: '#F6F6F6', height: '1.4rem', display: 'flex', justifyContent: 'center'}}>
        <JdButtonGroup style={{width: '6.9rem'}}>
          <JdButton type="white">取消</JdButton>
          <JdButton type="primary">确定</JdButton>
        </JdButtonGroup>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
