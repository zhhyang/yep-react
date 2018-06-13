---
order: 1
title: Relative
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';

import {Sticky} from '@jdcfe/yep-react';
const {StickyContainer} = Sticky;

class Header extends React.Component {
  static defaultProps = {
    className: '',
  };
  render() {
    const {style, renderCount, className} = this.props;
    return (
      <div className={'sticky-header ' + className} style={style}>
        <h2>
          <span className="pull-left">
            {'<Sticky /> '}
            {renderCount ? <small>(invocation: #{renderCount})</small> : null}
          </span>
        </h2>
      </div>
    );
  }
}

let renderCount = 0;
class Relative extends React.Component {
  render() {
    return (
      <div>
        <StickyContainer className="container relative">
          <div className="gap tall" style={{background: 'linear-gradient(#aaa, #fff)'}}>
            <div className="gap short" />
            <Sticky relative={true}>{({style}) => <Header style={style} renderCount={renderCount++} />}</Sticky>
            <div className="gap short" />
            <h2>scrolling container</h2>
          </div>
        </StickyContainer>
      </div>
    );
  }
}

ReactDOM.render(<Relative />, mountNode);
```
