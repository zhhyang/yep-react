---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Picker, Button, WhiteSpace} from '@jdcfe/yep-react';

const city = [
  {
    value: '340000',
    label: '安徽省',
    children: [
      {
        value: '341500',
        label: '六安市',
        children: [
          {
            value: '341522',
            label: '霍邱县',
            children: [],
          },
          {
            value: '341525',
            label: '霍山县',
            children: [],
          },
          {
            value: '341502',
            label: '金安区',
            children: [],
          },
          {
            value: '341524',
            label: '金寨县',
            children: [],
          },
          {
            value: '341526',
            label: '其它区',
            children: [],
          },
          {
            value: '341521',
            label: '寿县',
            children: [],
          },
          {
            value: '341523',
            label: '舒城县',
            children: [],
          },
          {
            value: '341503',
            label: '裕安区',
            children: [],
          },
        ],
      },
      {
        value: '340500',
        label: '马鞍山市',
        children: [
          {
            value: '340506',
            label: '博望区',
            children: [],
          },
        ],
      },
      {
        value: '341800',
        label: '宣城市',
        children: [
          {
            value: '341822',
            label: '广德县',
            children: [],
          },
          {
            value: '341824',
            label: '绩溪县',
            children: [],
          },
          {
            value: '341825',
            label: '旌德县',
            children: [],
          },
        ],
      },
    ],
  },
  {
    value: '820000',
    label: '澳门特别行政区',
    children: [
      {
        value: '820100',
        label: '澳门半岛',
        children: [],
      },
      {
        value: '820200',
        label: '离岛',
        children: [],
      },
    ],
  },
  {
    value: '110000',
    label: '北京',
    children: [
      {
        value: '110100',
        label: '北京市',
        children: [
          {
            value: '110114',
            label: '昌平区',
            children: [],
          },
          {
            value: '110105',
            label: '朝阳区',
            children: [],
          },
          {
            value: '110103',
            label: '崇文区',
            children: [],
          },
          {
            value: '110115',
            label: '大兴区',
            children: [],
          },
          {
            value: '110101',
            label: '东城区',
            children: [],
          },
          {
            value: '110111',
            label: '房山区',
            children: [],
          },
          {
            value: '110106',
            label: '丰台区',
            children: [],
          },
          {
            value: '110108',
            label: '海淀区',
            children: [],
          },
          {
            value: '110116',
            label: '怀柔区',
            children: [],
          },
          {
            value: '110109',
            label: '门头沟区',
            children: [],
          },
          {
            value: '110228',
            label: '密云县',
            children: [],
          },
          {
            value: '110117',
            label: '平谷区',
            children: [],
          },
          {
            value: '110230',
            label: '其它区',
            children: [],
          },
          {
            value: '110107',
            label: '石景山区',
            children: [],
          },
          {
            value: '110113',
            label: '顺义区',
            children: [],
          },
          {
            value: '110112',
            label: '通州区',
            children: [],
          },
          {
            value: '110102',
            label: '西城区',
            children: [],
          },
          {
            value: '110104',
            label: '宣武区',
            children: [],
          },
          {
            value: '110229',
            label: '延庆县',
            children: [],
          },
        ],
      },
    ],
  },
];

class Demo extends React.PureComponent {
  constructor() {
    super();
    this.handleToggleShow = this.handleToggleShow.bind(this);
    this.handleToggleSlideDownShow = this.handleToggleSlideDownShow.bind(this);
    this.handleToggleSlideRightShow = this.handleToggleSlideRightShow.bind(this);
    this.state = {
      show: false,
    };
  }

  handleToggleShow() {
    this.setState({
      show: !this.state.show,
    });
  }

  handleToggleSlideDownShow() {
    this.setState({
      slideDownShow: !this.state.slideDownShow,
    });
  }

  handleToggleSlideRightShow() {
    this.setState({
      slideRightShow: !this.state.slideRightShow,
    });
  }

  render() {
    return (
      <div title="Picker">
        <Button type="primary" onClick={this.handleToggleShow}>
          选择医生
        </Button>
        <WhiteSpace />
        <Button onClick={this.handleToggleSlideDownShow}>选择性别</Button>
        <WhiteSpace />
        <Button type="primary" onClick={this.handleToggleSlideRightShow}>
          选择婚姻状况
        </Button>

        <Picker
          cols={1}
          show={this.state.show}
          onCancel={this.handleToggleShow}
          onOk={value => {
            this.handleToggleShow();
            alert(value);
          }}
          data={[
            {value: '住院医师', label: '住院医师'},
            {value: '主治医师', label: '主治医师'},
            {value: '副主任医师', label: '副主任医师'},
            {value: '主任医师', label: '住院医师'},
          ]}
        />

        <Picker
          show={this.state.slideDownShow}
          onCancel={this.handleToggleSlideDownShow}
          hasCancel
          space
          data={city}
          onChange={v => {
            this.setState({pickerValue: v});
            console.log(v);
          }}
          onOk={value => {
            console.log(value);
            this.handleToggleSlideDownShow();
          }}
        />
        <Picker
          show={this.state.slideRightShow}
          onCancel={this.handleToggleSlideRightShow}
          hasCancel
          space
          cols={1}
          title="婚姻状况"
          onOk={value => {
            alert(value);
            this.handleToggleSlideRightShow();
          }}
          data={[{value: '未婚', label: '未婚'}, {value: '已婚', label: '已婚'}, {value: '离异', label: '离异'}]}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
