---
order: 1
title: 设置初始位置
description: 使用 jumpIndex 设置初始位置
---

```js
import {VirtualList, Button} from '@jdcfe/yep-react';

const dataSource = [];

function generateLi(index) {
  return (
    <li key={`key-${index}`} style={{lineHeight: '20px'}}>
      key-{index}
    </li>
  );
}
function generateData(len) {
  for (let i = 0; i < len; i++) {
    dataSource.push(generateLi(i));
  }
}

class Demo extends React.Component {
  state = {
    initial: 100,
    dataSource: generateData(1000),
  };
  onClick() {
    this.setState({
      initial: this.state.initial + 100,
    });
  }
  render() {
    return (
      <div>
        <Button onClick={this.onClick.bind(this)}>jump to {this.state.initial + 100}</Button>
        <br />
        <br />
        <div className={'virtual-box'}>
          <VirtualList jumpIndex={this.state.initial}>{dataSource}</VirtualList>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
