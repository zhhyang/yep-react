---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Hammer, WhiteSpace} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  handleTap = () => {
    alert('Tap');
  };
  handleSwipe = () => {
    alert('Swipe');
  };
  handleSwipeLeft = () => {
    alert('SwipeLeft');
  };
  handleSwipeRight = () => {
    alert('SwipeRight');
  };

  render() {
    const options = {
      touchAction: 'compute',
      recognizers: {
        tap: {
          time: 600,
          threshold: 100,
        },
      },
    };
    return (
      <div>
        <Hammer
          onTap={this.handleTap}
          onSwipe={this.handleSwipe}
          onSwipeLeft={this.handleSwipeLeft}
          onSwipeRight={this.handleSwipeRight}
        >
          <div
            style={{
              width: '100%',
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ec3838',
            }}
          >
            Tap Me(Default options)
          </div>
        </Hammer>
        <WhiteSpace />
        <Hammer onTap={this.handleTap} options={options}>
          <div
            style={{
              width: '100%',
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ec3838',
            }}
          >
            Tap Me(Custom options)
          </div>
        </Hammer>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
