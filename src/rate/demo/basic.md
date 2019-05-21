---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Rate, Toast} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    rating: 4,
  };

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue});
    Toast.show(nextValue);
  };

  render() {
    const {rating} = this.state;
    return <Rate name="rate1" starCount={10} value={rating} onStarClick={this.onStarClick} />;
  }
}

ReactDOM.render(<Demo />, mountNode);
```
