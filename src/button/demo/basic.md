---
order: 0
title: 基础用法
description: 
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from "@jdcfe/lrc-m";
const {ButtonGroup} = Button;
class Demo extends React.PureComponent {

  render() {
    return (
      <div>
        <Button onClick={()=>{alert('default')}}>default</Button>
                 
        <Button disabled>default disabled</Button>
         
        <Button type="primary" onClick={()=>{alert('primary')}}>primary</Button>
         
        <Button type="primary" disabled>primary disabled</Button>
         
        <Button size="md" style={{backgroundColor: '#2A83E1', color: '#FFFFFF', border: 0}}>下一步，上传医师认证相关证书</Button>
         
        <Button inline>inline</Button>
         
        <Button submit>Submit</Button>
         
        <ButtonGroup>
          <Button>确定</Button>
          <Button type="primary">取消</Button>
        </ButtonGroup>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>,  mountNode);

```
