---
order: 0
title: 基础用法
description: 
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {ActionSheet, Button} from "@jdcfe/lrc-m";

class Demo extends React.PureComponent {

  constructor() {
    super()
    this.handleToggleShow = this.handleToggleShow.bind(this)
    this.handleToggleSlideDownShow = this.handleToggleSlideDownShow.bind(this)
    this.handleToggleSlideRightShow = this.handleToggleSlideRightShow.bind(this)
    this.state = {
      show: false,
    }
  }

  handleToggleShow() {
    this.setState({
      show: !this.state.show
    })
  }

  handleToggleSlideDownShow() {
    this.setState({
      slideDownShow: !this.state.slideDownShow
    })
  }

  handleToggleSlideRightShow() {
    this.setState({
      slideRightShow: !this.state.slideRightShow
    })
  }


  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleToggleShow}>显示</Button>
        
        <Button onClick={this.handleToggleSlideDownShow}>显示取消按钮</Button>
        
        <Button type="primary" onClick={this.handleToggleSlideRightShow}>婚姻状况</Button>
        
        <ActionSheet
          show={this.state.show}
          onCancel={this.handleToggleShow}
          data={['未婚','已婚','离异']}
        />

        <ActionSheet
          show={this.state.slideDownShow}
          onCancel={this.handleToggleSlideDownShow}
          hasCancel
          space
          data={['未婚','已婚','离异']}
          active={1}
        />
        <ActionSheet
          show={this.state.slideRightShow}
          onCancel={this.handleToggleSlideRightShow}
          hasCancel
          space
          title="婚姻状况"
          data={['未婚','已婚','离异']}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo/>,  mountNode);

```
