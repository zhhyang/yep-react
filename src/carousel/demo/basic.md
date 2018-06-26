---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Carousel} from '@jdcfe/lrc-m';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Carousel autoPlay={5000} className="aaa" >
          <div>
            <img src="//img13.360buyimg.com/popactivity/s750x310_jfs/t20509/74/416462535/109407/be7c303b/5b0ccea6N16a32a31.jpg!q70!cc_750x310" />
          </div>
        </Carousel>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
