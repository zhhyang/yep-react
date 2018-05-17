---
order: 0
title: 基础用法
description: 
---

```js
import React from 'react';
import {List} from "@jdcfe/lrc-m";
const {Item} = List;

class Demo extends React.PureComponent {
  
  constructor(){
    super()
    this.state = {
      disabled: false,
    }
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
            Title
          </Item>
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {}}
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          >
            ListItem （Android）
          </Item>
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
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
              >My wallet</Item>
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
                    <Item wrap>Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text</Item>
                    <Item extra="extra content" multipleLine align="top" wrap>
                      Multiple line and long text will wrap. Long Text Long Text Long Text
                    </Item>
                    <Item extra="no arrow" arrow="empty" className="spe" wrap>
                      In rare cases, the text of right side will wrap in the single line with long text. long text long text long text
                    </Item>
                  </List>
                  <List renderHeader={() => 'Other'} className="my-list">
                          <Item disabled={this.state.disabled} extra="" onClick={() => { console.log('click', this.state.disabled); this.setState({ disabled: !this.state.disabled }); }}>Click to disable</Item>
                          <Item>
                            <select defaultValue="1">
                              <option value="1">Html select element</option>
                              <option value="2" disabled>Unable to select</option>
                              <option value="3">option 3</option>
                            </select>
                          </Item>
                        </List>
    </div>
    );
  }
}

ReactDOM.render(<Demo/>,  mountNode);

```
    
