---
order: 7
title: centerMode
description: centerMode
---

```js
import React from 'react';
import {Carousel} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Carousel centerMode>
          <div>
            <img src="//m.360buyimg.com/babel/jfs/t23224/35/1026004507/74414/35929bac/5b4d885bN0cdaa9f4.jpg" />
          </div>
          <div>
            <img src="//m.360buyimg.com/babel/jfs/t21421/47/1859879985/100913/f5dd5cb5/5b3caa69N4c7a4999.jpg" />
          </div>
          <div>
            <img src="//img1.360buyimg.com/pop/jfs/t23260/244/889866376/102314/ef6393ec/5b46cb8cN1804aa98.jpg" />
          </div>
        </Carousel>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
