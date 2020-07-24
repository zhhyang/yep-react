---
order: 7
title: 带Icon按钮
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {JdButton, Icon} from '@jdcfe/yep-react';
import {DeleteOutlined} from '@jdcfe/icons-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <JdButton
          type="ghost"
          icon={<Icon.JiaZai className="Yep-icon-xxs Yep-icon-jiazai" style={{color: 'red'}} />}
          circle
          size="sm"
          style={{marginRight: '0.36rem'}}
        >
          Loading
        </JdButton>
        <JdButton type="ghost" icon={<DeleteOutlined />} circle size="sm">
          快速清理
        </JdButton>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
