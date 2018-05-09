---
order: 0
title: 基础用法
description: 
---

```js
import React, {PureComponent} from 'react'
import {Dialog, Button} from "@jdcfe/lrc-m"

class Demo extends PureComponent {

  state = {
    show:false,
  }

  render() {
    return (
      <Page title="Dialog">
        <Button onClick={() => {
          this.setState({show:true})
        }}>Dialog</Button>
        
        <Button onClick={() => {
          Dialog.confirm('标题', '确定要删除吗?')
        }}>Confirm</Button>
        
        <Button onClick={() => {
          Dialog.confirm('标题', '确定要删除吗?', [{text: '好的', onClick: () => console.log('好的')}])
        }}>Alert</Button>
        
        <Dialog show={this.state.show} maskCloseable onClose={()=>{this.setState({show:false})}}>
          <div className={`Yep-dialog-alert-content`}>123</div>
        </Dialog>
      </Page>
    );
  }
}

ReactDOM.render(<Demo/>,  mountNode);

```
