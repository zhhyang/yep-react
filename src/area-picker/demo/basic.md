---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Button, AreaPicker} from '@jdcfe/yep-react';
import jsonp from 'jsonp';
const province = [
  {id: 1, name: '北京', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 2, name: '上海', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 3, name: '天津', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 4, name: '重庆', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 5, name: '河北', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 6, name: '山西', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 7, name: '河南', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 8, name: '辽宁', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 9, name: '吉林', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 10, name: '黑龙江', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 11, name: '内蒙古', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 12, name: '江苏', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 13, name: '山东', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 14, name: '安徽', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 15, name: '浙江', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 16, name: '福建', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 17, name: '湖北', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 18, name: '湖南', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 19, name: '广东', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 20, name: '广西', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 21, name: '江西', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 22, name: '四川', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 23, name: '海南', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 24, name: '贵州', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 25, name: '云南', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 26, name: '西藏', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 27, name: '陕西', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 28, name: '甘肃', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 29, name: '青海', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 30, name: '宁夏', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {id: 31, name: '新疆', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {
    id: 32,
    name: '台湾',
    IsSupCOD: true,
    isForeignOverSea: false,
    isGangAoTai: true,
    areaCode: '886',
    nameCode: 'TW',
  },
  {id: 84, name: '钓鱼岛', IsSupCOD: true, isForeignOverSea: false, isGangAoTai: false, areaCode: '', nameCode: ''},
  {
    id: 52993,
    name: '港澳',
    IsSupCOD: false,
    isForeignOverSea: false,
    isGangAoTai: true,
    areaCode: '',
    nameCode: '',
  },
  {
    id: 53283,
    name: '海外',
    IsSupCOD: false,
    isForeignOverSea: true,
    isGangAoTai: false,
    areaCode: '1',
    nameCode: 'HW',
  },
];

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
  };

  render() {
    return (
      <div>
        <Button onClick={this.onShow} type={'ghost'}>
          点我
        </Button>
        <AreaPicker
          chooseLabel={'12321'}
          show={this.state.show}
          onCancel={this.onCancel}
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
