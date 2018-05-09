---
order: 0
title: 基础用法
description: 
---

```js
import React, {PureComponent} from 'react'
import {Toast,Button} from "@jdcfe/lrc-m"

class Demo extends PureComponent {

  render() {
    return (
      <div title="Radio">
        <Button onClick={() =>{ Toast.show('This is a toast tips !!!')}}>显示</Button>
                
        <Button onClick={() =>{ Toast.fail('失败')}}>显示 fail</Button>
        
        <Button onClick={() =>{ Toast.success('成功')}}>显示 success</Button>
        
        <Button onClick={() =>{ Toast.loading('loading')}}>显示loading</Button>
      </div>
    );
  }
}




ReactDOM.render(<Demo/>,  mountNode);

```
