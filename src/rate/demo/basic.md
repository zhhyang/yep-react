---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Rate} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  state = {
    rating: 4,
  };

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue});
  };

  render() {
    const {rating} = this.state;
    return (
      <div>
        <Rate name="rate1" starCount={10} value={rating} onStarClick={this.onStarClick} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
