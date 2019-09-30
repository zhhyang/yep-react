---
order: 0
title: 基础用法
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
            吸顶块
            {renderCount ? <small>(invocation: #{renderCount})</small> : null}
          </span>
        </h2>
      </div>
    );
  }
}

let renderCount = 0;
class Demo extends React.Component {
  render() {
    return (
      <div>
        <h2>吸顶块之前的填充内容</h2>
        <div className="gap short" style={{background: 'linear-gradient(#fff, #ddd)'}} />
        <StickyContainer className="container">
          <Sticky>{({style}) => <Header style={style} renderCount={renderCount++} />}</Sticky>

          <h2 className="text-center">保持吸顶状态的内容</h2>
        </StickyContainer>
        <div className="gap tall" style={{background: 'linear-gradient(#ddd, #fff)'}}>
          <h2>滚动到此处不再吸顶</h2>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
