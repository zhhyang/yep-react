---
order: 0
title: 基础用法
description: 
---

```js
import React from 'react';
import {SearchBar} from '@jdcfe/lrc-m';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <SearchBar
          onSearch={() => console.log('跳搜索结果页面')}
          clearable={true}
          placeholder={'请输入您要搜索的商品'}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
