---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {AutoComplete} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <ComponentCard title="基础用法">
          <AutoComplete
            placeholder="输入关键词"
            size={'lg'}
            clear={true}
            onChange={v => {
              console.log(v);
            }}
            source={['愿得一人心', '后宫佳丽三千人']}
          />
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
