---
order: 3
title: 按钮组
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
      <div>
        <ButtonGroup>
          <Button>确定</Button>
          <Button type="primary">取消</Button>
        </ButtonGroup>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
