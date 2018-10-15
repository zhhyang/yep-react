---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {List} from '@jdcfe/yep-react';
const {Item, Brief} = List;

class Demo extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      disabled: false,
    };
  }

  render() {
    return (
      <div>
        <List renderHeader={() => 'Basic Style'} className="my-list">
          <Item extra={'extra content'}>Title</Item>
          <Item extra={'extra content'}>Title</Item>
          <Item extra={'extra content'}>Title</Item>
          <Item extra={'extra content'}>Title</Item>
        </List>
        <List renderHeader={() => 'Subtitle'} className="my-list">
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
            Title <Brief>subtitle</Brief>
          </Item>
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {}}
            icon={'arrow-right'}
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          >
            ListItem （Android）
          </Item>
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            icon={
              <img
                style={{display: 'block', width: 15, height: 15}}
                src="http://img13.360buyimg.com/uba/jfs/t23977/282/1022509367/2839/74d4afce/5b4dad41N005d5914.png"
              />
            }
            onClick={() => {}}
            extra={'extra content'}
          >
            Title
          </Item>
        </List>
        <List renderHeader={() => 'Icon in the left'}>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >
            My wallet
          </Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
            arrow="horizontal"
          >
            My Cost Ratio
          </Item>
        </List>
        <List renderHeader={() => 'Text Wrapping'} className="my-list">
          <Item data-seed="logId">Single line，long text will be hidden with ellipsis；</Item>
          <Item wrap>
            Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text
          </Item>
          <Item extra="extra content" multipleLine align="top" wrap>
            Multiple line and long text will wrap. Long Text Long Text Long Text
          </Item>
          <Item extra="no arrow" arrow="empty" className="spe" wrap>
            In rare cases, the text of right side will wrap in the single line with long text. long text long text long
            text
          </Item>
        </List>
        <List renderHeader={() => 'Other'} className="my-list">
          <Item
            disabled={this.state.disabled}
            extra=""
            onClick={() => {
              console.log('click', this.state.disabled);
              this.setState({disabled: !this.state.disabled});
            }}
          >
            Click to disable
          </Item>
          <Item>
            <select defaultValue="1">
              <option value="1">Html select element</option>
              <option value="2" disabled>
                Unable to select
              </option>
              <option value="3">option 3</option>
            </select>
          </Item>
        </List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
