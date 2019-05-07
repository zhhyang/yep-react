---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {PickerView} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

const seasons = [
  [
    {
      label: '2018',
      value: '2018',
    },
    {
      label: '2019',
      value: '2019',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
    {
      label: '秋',
      value: '秋',
    },
    {
      label: '冬',
      value: '冬',
    },
  ],
];
class Demo extends React.Component {
  state = {
    value: null,
  };
  onChange = value => {
    console.log(value);
    this.setState({
      value,
    });
  };
  onScrollChange = value => {
    console.log(value);
  };
  render() {
    return (
      <PickerView
        onChange={this.onChange}
        onScrollChange={this.onScrollChange}
        value={this.state.value}
        data={seasons}
        cascade={false}
      />
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
