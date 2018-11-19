---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {SearchBar} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    value: '',
  };
  render() {
    return (
      <div>
        <SearchBar
          onSearch={() => console.log('跳搜索结果页面')}
          clearable={true}
          placeholder={'请输入您要搜索的商品'}
          value={this.state.value}
          onChange={value => this.setState({value})}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
