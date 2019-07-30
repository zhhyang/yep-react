---
order: 0
title: 弹出框和输入框等宽
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
          source={['愿得一人心，白首不分离', '后宫佳丽三千人，三千宠爱在一身']}
        />
        <AutoComplete
          placeholder="输入关键词"
          size={'lg'}
          clear={true}
          onChange={v => {
            console.log(v);
          }}
          source={['愿得一人心，白首不分离', '后宫佳丽三千人，三千宠爱在一身']}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
