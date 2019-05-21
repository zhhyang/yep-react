---
order: 1
title: 包含副标题
description:
---

```js
import React from 'react';
import {List} from '@jdcfe/yep-react';
const {Item, Brief} = List;

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <List renderHeader={() => '包含副标题'}>
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
            标题 <Brief>副标题</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => {}} icon={'arrow-right'} thumb={<span>白条</span>}>
            白条支付即享12期免息/24期息费五折
          </Item>
          <Item
            arrow="horizontal"
            thumb="//img14.360buyimg.com/jdphoto/jfs/t14269/206/1377464630/417/1601d619/5a4dd753N5a33ba54.png!q70.webp"
            multipleLine
            icon={
              <img
                style={{display: 'block', width: 15, height: 15}}
                src="http://img13.360buyimg.com/uba/jfs/t23977/282/1022509367/2839/74d4afce/5b4dad41N005d5914.png"
              />
            }
            onClick={() => {}}
          >
            闲置回收<Brief>以旧换新</Brief>
          </Item>
        </List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
