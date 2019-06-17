---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Cell, AreaPicker} from '@jdcfe/yep-react';
const {Item} = Cell;
import jsonp from 'jsonp';
const province = [{id: 1, name: '北京'}, {id: 2, name: '上海'}];

const getArea = params => {
  return new Promise((resolve, reject) => {
    jsonp(`//d.jd.com/area/get?fid=${params}&t=${Math.floor(Math.random() * 10000)}`, null, (err, ret) => {
      if (err) {
        reject(err);
      } else {
        resolve(ret);
      }
    });
  });
};
class Demo extends React.PureComponent {
  state = {
    show: false,
    data: province,
    address: '北京市东城区',
  };
  onClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  onOk = values => {
    this.setState({show: false, address: values.map(value => value.name).join(' ')});
  };
  render() {
    return (
      <div>
        <Cell>
          <Item label="白条">白条随机立减最高99 每个用户限用1次</Item>
          <Item label="已选">iPhone X 经典蓝，1件，可选服务</Item>
          <Item label="送至" onClick={this.onClick}>
            {this.state.address}
          </Item>
        </Cell>
        <AreaPicker
          show={this.state.show}
          onCancel={this.onClick}
          initialData={this.state.data}
          onOk={this.onOk}
          fetchAction={(city, index) => getArea(city.id)}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
