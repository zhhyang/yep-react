---
order: 1
title: 自定义颜色
description:
---

```js
import React from 'react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="iconContainer">
          <div className="iconItem">
            <CircleOutlined style={{color: '#f0ad4e', fontSize: '0.5rem'}} />
            <h6 className="iconName">CircleOutlined</h6>
          </div>
          <div className="iconItem">
            <CollectOutlined style={{color: '#F0250F', fontSize: '0.5rem'}} />
            <h6 className="iconName">CollectOutlined</h6>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);
```
