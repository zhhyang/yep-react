---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {InfiniteLoader} from '@jdcfe/yep-react';
const style = {
  height: 50,
  border: '1px solid green',
  margin: 6,
  padding: 8,
};
class Demo extends React.PureComponent {
  state = {
    items: Array.from({length: 20}),
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({length: 20})),
      });
    }, 1500);
  };

  render() {
    return (
      <div>
        <InfiniteLoader
          dataLength={this.state.items.length}
          loadMore={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteLoader>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
