---
order: 1
title: 图片
description:
---

```js
import React from 'react';
import {Avatar} from '@jdcfe/yep-react';

import './demo.css';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Avatar
          size="large"
          src="//storage.360buyimg.com/i.imageUpload/6a696e6778696a756e31343637333931383638343133_mid.jpg"
        />
        <Avatar src="//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
