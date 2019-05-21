---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {LazyLoad} from '@jdcfe/yep-react';
class Widget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: true,
      count: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id && this.props.id) {
      this.setState({
        isReady: false,
      });

      setTimeout(() => {
        this.setState({
          isReady: true,
          count: this.state.count + 1,
        });
      }, 500);
    } else {
      this.setState({
        isReady: true,
      });
    }
  }

  render() {
    return this.state.isReady ? (
      <div className="widget">
        <span className="widget-counter">{this.props.count}</span>
        {this.props.once ? (
          <div className="widget-text once">
            <code>
              &lt;LazyLoad once&gt;
              <br />
              &nbsp;&nbsp;&lt;Widget /&gt;
              <br />
              &lt;/LazyLoad&gt;
            </code>
          </div>
        ) : (
          <div className="widget-text">
            <code>
              &lt;LazyLoad&gt;
              <br />
              &nbsp;&nbsp;&lt;Widget /&gt;
              <br />
              &lt;/LazyLoad&gt;
            </code>
          </div>
        )}
        <p>render times: {this.state.count}</p>
        <p>props from parent: {this.props.id}</p>
      </div>
    ) : (
      <div className="widget loading">loading...</div>
    );
  }
}

const Operation = ({type, onClickUpdate, noExtra}) => (
  <div className="op">
    {!noExtra && (
      <div>
        <a className="update-btn button-secondary pure-button" onClick={onClickUpdate}>
          Update
        </a>
        <p className="desc">
          Clicking this button will make all <code>Widgets</code> in <strong> visible area </strong>
          reload data from server.
        </p>
        <p className="desc">
          Pay attention to <code>props from parent</code> block in <code>Widget</code>
          to identify how LazyLoad works.
        </p>
      </div>
    )}
  </div>
);
function uniqueId() {
  return (Math.random().toString(36) + '00000000000000000').slice(2, 10);
}
class Demo extends React.Component {
  constructor() {
    super();

    const id = uniqueId();
    this.state = {
      arr: Array.apply(null, Array(20)).map((a, index) => {
        return {
          uniqueId: id,
          once: [6, 7].indexOf(index) > -1,
        };
      }),
    };
  }

  handleClick = () => {
    const id = uniqueId();

    this.setState({
      arr: this.state.arr.map(el => {
        return {
          ...el,
          uniqueId: id,
        };
      }),
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Operation type="normal" onClickUpdate={this.handleClick} />
        <div className="widget-list">
          {this.state.arr.map((el, index) => {
            return (
              <LazyLoad once={el.once} key={index} height={200} offset={[-100, 0]}>
                <Widget once={el.once} id={el.uniqueId} count={index + 1} />
              </LazyLoad>
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
