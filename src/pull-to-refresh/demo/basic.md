---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {InfiniteLoader, Popup, PullToRefresh, Button} from '@jdcfe/yep-react';
const style = {
  height: 50,
  border: '1px solid green',
  margin: 6,
  padding: 8,
};
class Demo extends React.PureComponent {
  state = {
    items: Array.from({length: 20}),
    refreshing: false,
    show: false,
  };

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({length: 20})),
      });
    }, 1500);
  };

  refresh = () => {
    this.setState({
      refreshing: true,
    });
    setTimeout(() => {
      this.setState({
        items: Array.from({length: 20}),
        refreshing: false,
      });
    }, 2000);
  };

  render() {
    return (
      <div>
        <Popup show={this.state.show} onCancel={() => this.setState({show: false})} popupTransition="slide-down">
          <div className="up">
            <div className="cur">测试遮罩是否会触发底层下拉刷新</div>
          </div>
        </Popup>
        <Button onClick={() => this.setState({show: true})}>展开遮罩</Button>
        <PullToRefresh refreshFunction={this.refresh} refreshing={this.state.refreshing}>
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
        </PullToRefresh>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
