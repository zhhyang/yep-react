---
order: 1
title: 不可编辑
description:
---

```js
import React from 'react';
import {Rate} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

class Demo extends React.PureComponent {
  state = {
    rating: 8,
  };

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue});
  };

  render() {
    const {rating} = this.state;
    return (
      <div>
        <ComponentCard title="不可编辑">
          <Rate name="rate1" editing={false} starCount={10} value={rating} onStarClick={this.onStarClick} />
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
