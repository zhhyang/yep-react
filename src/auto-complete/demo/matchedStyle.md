---
order: 1
title: 自定义命中字符样式
description:
---

```js
import React from 'react';
import {AutoComplete} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <AutoComplete
          placeholder="输入关键词"
          size={'lg'}
          clear={true}
          onChange={v => {
            console.log(v);
          }}
          matchedStyle="color:blue"
          source={['愿得一人心，白首不分离', '后宫佳丽三千人，三千宠爱在一身']}
        />
        <AutoComplete
          placeholder="输入关键词"
          size={'lg'}
          clear={true}
          onChange={v => {
            console.log(v);
          }}
          matchedStyle="color:red"
          source={['愿得一人心，白首不分离', '后宫佳丽三千人，三千宠爱在一身']}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
