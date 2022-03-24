---
order: 1
title: 默认选中
description:
---

```js
import React from 'react';
import {Button, AreaPicker} from '@jdcfe/yep-react';
import jsonp from 'jsonp';
const province = [
  {id: 1, name: '北京'},
  {id: 2, name: '上海'},
  {id: 3, name: '天津'},
  {id: 4, name: '重庆'},
  {id: 5, name: '河北'},
  {id: 6, name: '山西'},
  {id: 7, name: '河南'},
  {id: 8, name: '辽宁'},
  {id: 9, name: '吉林'},
  {id: 10, name: '黑龙江'},
  {id: 11, name: '内蒙古'},
  {id: 12, name: '江苏'},
  {id: 13, name: '山东'},
  {id: 14, name: '安徽'},
  {id: 15, name: '浙江'},
  {id: 16, name: '福建'},
  {id: 17, name: '湖北'},
  {id: 18, name: '湖南'},
  {id: 19, name: '广东'},
  {id: 20, name: '广西'},
  {id: 21, name: '江西'},
  {id: 22, name: '四川'},
  {id: 23, name: '海南'},
  {id: 24, name: '贵州'},
  {id: 25, name: '云南'},
  {id: 26, name: '西藏'},
  {id: 27, name: '陕西'},
  {id: 28, name: '甘肃'},
  {id: 29, name: '青海'},
  {id: 30, name: '宁夏'},
  {id: 31, name: '新疆'},
  {id: 32, name: '台湾'},
  {id: 84, name: '钓鱼岛'},
  {id: 52993, name: '港澳'},
  {id: 53283, name: '海外'},
];

const getArea = params => {
  return new Promise((resolve, reject) => {
    jsonp(`https://fts.jd.com/area/get?fid=${params}&t=${Math.floor(Math.random() * 10000)}`, null, (err, ret) => {
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
  };

  onCancel = () => {
    this.setState({show: false});
  };

  onShow = () => {
    this.setState({show: true});
  };

  onOk = (values, index) => {
    console.log(values);
    this.setState({show: false});
    alert(JSON.stringify([values]));
  };

  render() {
    return (
      <div>
        <Button onClick={this.onShow} type={'ghost'}>
          默认选中地址
        </Button>
        <AreaPicker
          chooseLabel={'12321'}
          show={this.state.show}
          onCancel={this.onCancel}
          initialData={this.state.data}
          onOk={this.onOk}
          fetchAction={(city, index) => getArea(city.id)}
          selected={[
            {id: 1, name: '北京'},
            {name: '东城区', id: 2802},
            {id: 54748, name: '建国门街道'},
          ]}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
