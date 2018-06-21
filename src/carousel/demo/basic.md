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
        <Carousel autoPlay={5000} className="aaa" isBounces={false}>
          <div>
            <img src="//img13.360buyimg.com/popactivity/s750x310_jfs/t20509/74/416462535/109407/be7c303b/5b0ccea6N16a32a31.jpg!q70!cc_750x310" />
          </div>
          <div>
            <img src="//img13.360buyimg.com/popactivity/s750x214_jfs/t21682/201/857107433/119607/34abd114/5b19f491N7feae4d5.jpg!cc_750x214!q70" />
          </div>
          <div>
            <img src="//img11.360buyimg.com/popactivity/s750x310_jfs/t21508/86/127140022/107226/daf99cf3/5afe8ab7Nb3170223.jpg!q70!cc_750x310" />
          </div>
          <div>
            <img src="//img13.360buyimg.com/popactivity/s750x310_jfs/t21487/83/430255063/143279/d45b61b7/5b0dfd14N21108ea0.jpg!q70!cc_750x310" />
          </div>
          <div>
            <img src="//img13.360buyimg.com/popactivity/s750x310_jfs/t21394/97/755118858/112063/50a96e6c/5b17449aN3262e98d.jpg!q70!cc_750x310" />
          </div>
          <div>
            <img src="//img11.360buyimg.com/popactivity/s750x214_jfs/t19990/146/1116932444/134844/24bba24e/5b14d79eN75197b06.jpg!cc_750x214!q70" />
          </div>
        </Carousel>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
