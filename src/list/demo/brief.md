---
order: 1
title: 包含副标题
description: 左侧标题下方可配置一个副标题，副标题可单行或多行显示。
---

```js
import React from 'react';
import {List} from '@jdcfe/yep-react';
const {Item, Brief} = List;

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <List>
          <Item arrow="horizontal" icon onClick={() => {}}>
            Title<Brief>subtitle</Brief>
          </Item>
          <Item
            arrow="horizontal"
            multipleLine
            icon={
              <img
                style={{display: 'block', width: 15, height: 15}}
                src="http://img13.360buyimg.com/uba/jfs/t23977/282/1022509367/2839/74d4afce/5b4dad41N005d5914.png"
              />
            }
            onClick={() => {}}
          >
            Title<Brief>can be a multi-line subtitle</Brief>
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
            Title<Brief>subtitle</Brief>
          </Item>
        </List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
