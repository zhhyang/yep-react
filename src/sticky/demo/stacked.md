---
order: 2
title: Stacked
description: 
---

```js
import React from "react";
import ReactDOM from "react-dom";

import { Sticky } from "@jdcfe/lrc-m";
const {StickyContainer }= Sticky;

const containerBg = i => `hsl(${i * 40}, 70%, 90%)`;
const headerBg = i => `hsl(${i * 40}, 70%, 50%)`;

class Header extends React.Component {
  static defaultProps = {
    className: ""
  };
  render() {
    const { style, renderCount, className } = this.props;
    return (
      <div className={"sticky-header " + className} style={style}>
        <h2>
          <span className="pull-left">
            {"<Sticky /> "}
            {renderCount ? <small>(invocation: #{renderCount})</small> : null}
          </span>
        </h2>
      </div>
    );
  }
}

class Stacked extends React.Component {
  render() {
    return (
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <StickyContainer
            key={i}
            className="container"
            style={{ background: containerBg(i) }}
          >
            <Sticky>
              {({ style }) => (
                <Header style={{ ...style, background: headerBg(i) }} />
              )}
            </Sticky>
            <h2 className="text-center">{`<StickyContainer #${i} />`}</h2>
          </StickyContainer>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<Stacked/>,  mountNode);

```
