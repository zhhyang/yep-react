---
order: 0
title: 基础用法
description: 
---

```js
import React from 'react';
import {AutoComplete} from "@jdcfe/yep-react";

class Demo extends React.PureComponent {

  render() {
    return (
      <div>
        <AutoComplete placeholder="输入关键词"
        size={'lg'}
        clearable={true}
        onChange={(v)=>{console.log(v)}} 
        source={['愿得一人心', '后宫佳丽三千人']} />
    </div>
    );
  }
}

ReactDOM.render(<Demo/>,  mountNode);

```
    
