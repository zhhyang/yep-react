---
order: 2
title: 均分按钮
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@jdcfe/yep-react';
const {ButtonGroup} = Button;
class Demo extends React.PureComponent {
  render() {
    return (
      <div style={{backgroundColor: '#F6F6F6', height: '1.4rem', display: 'flex', justifyContent: 'center'}}>
        <ButtonGroup style={{width: '6.9rem'}}>
          <Button type="white">取消</Button>
          <Button type="primary">确定</Button>
        </ButtonGroup>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
