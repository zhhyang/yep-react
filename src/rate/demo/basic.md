---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Rate, Toast} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

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
    return (
      <div>
        <ComponentCard title="基础用法">
          <Rate name="rate1" starCount={10} value={rating} onStarClick={this.onStarClick} />
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
