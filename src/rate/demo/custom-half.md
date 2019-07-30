---
order: 3
title: 自定义半星图标
description:
---

```js
import React from 'react';
import {Rate, Icon} from '@jdcfe/yep-react';

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
      <Rate
        name="rate1"
        starCount={10}
        renderStarIconHalf={(index, value, name, id) => <Icon type="star-half-empty" key={`icon_${id}`} />}
        value={rating}
        onStarClick={this.onStarClick}
      />
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
