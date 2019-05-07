---
order: 4
title: 自定义文字和颜色
description:
---

```js
import React from 'react';
import {Badge} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Badge text={'new'} />
        <Badge text="券" style={{marginLeft: 12, padding: '0 3px', backgroundColor: '#f19736', borderRadius: 2}} />
        <Badge text="NEW" style={{marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2}} />
        <Badge
          text="凭处方退诊费"
          style={{
            marginLeft: 5,
            padding: '0 2px',
            backgroundColor: '#fff',
            borderRadius: 2,
            fontSize: 11,
            color: '#ED2945',
            border: '1px solid #ED2945',
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
