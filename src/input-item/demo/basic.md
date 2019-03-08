---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {InputItem, List, ActionSheet, Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSexItemClick = this.handleSexItemClick.bind(this);
    this.handleToggleSexShow = this.handleToggleSexShow.bind(this);
    this.state = {
      sexShow: false,
      sex: '',
    };
  }

  handleToggleSexShow() {
    this.setState({
      sexShow: !this.state.sexShow,
    });
  }

  handleSexItemClick(item, index) {
    this.setState({
      sex: item,
    });
    this.handleToggleSexShow();
  }
  render() {
    return (
      <div>
        <List>
          <InputItem placeholder={'111'} defaultValue="123" clear extra={<Icon type={'tip'} />}>
            姓名
          </InputItem>
          <InputItem
            placeholder={'sex'}
            value={this.state.sex}
            editable={false}
            onClick={() => {
              this.handleToggleSexShow();
            }}
          >
            患者性别
          </InputItem>
          <ActionSheet
            show={this.state.sexShow}
            onCancel={this.handleToggleSexShow}
            active={this.state.sex}
            hasCancel
            space
            data={['男', '女']}
            itemClick={this.handleSexItemClick}
          />
        </List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
