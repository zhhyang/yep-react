---
order: 3
title: 自定义半星图标
description:
---

```js
import React from 'react';
import {Rate} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

class Demo extends React.PureComponent {
  state = {
    rating: 5.5,
  };

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue});
  };

  render() {
    const {rating} = this.state;
    return (
      <div>
        <ComponentCard title="自定义半星图标">
          <Rate
            name="rate1"
            starCount={10}
            renderStarIconHalf={(index, value, name, id) => <Icon type="star-half-empty" key={`icon_${id}`} />}
            value={rating}
            onStarClick={this.onStarClick}
          />
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
