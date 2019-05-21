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
    value: 1,
    label: '北京',
    children: [
      {
        value: 72,
        label: '\u671d\u9633\u533a',
        children: [
          {value: 2799, label: '\u4e09\u73af\u4ee5\u5185'},
          {value: 2819, label: '\u4e09\u73af\u5230\u56db\u73af\u4e4b\u95f4'},
          {value: 2839, label: '\u56db\u73af\u5230\u4e94\u73af\u4e4b\u95f4'},
          {value: 2840, label: '\u4e94\u73af\u5230\u516d\u73af\u4e4b\u95f4'},
          {value: 4137, label: '\u7ba1\u5e84\u5730\u533a'},
          {value: 4139, label: '\u5317\u82d1'},
          {value: 4211, label: '\u5b9a\u798f\u5e84'},
          {value: 55651, label: '\u5b89\u8d1e\u8857\u9053'},
          {value: 55652, label: '\u5965\u8fd0\u6751\u8857\u9053'},
          {value: 55653, label: '\u516b\u91cc\u5e84\u8857\u9053'},
          {value: 55654, label: '\u5e38\u8425\u4e61'},
          {value: 55655, label: '\u671d\u5916\u8857\u9053'},
          {value: 55656, label: '\u5d14\u5404\u5e84\u4e61'},
          {value: 55657, label: '\u5927\u5c6f\u8857\u9053'},
          {value: 55658, label: '\u4e1c\u575d\u4e61'},
          {value: 55659, label: '\u4e1c\u98ce\u4e61'},
          {value: 55660, label: '\u4e1c\u6e56\u8857\u9053'},
          {value: 55661, label: '\u8c46\u5404\u5e84\u4e61'},
          {value: 55662, label: '\u57a1\u5934\u8857\u9053'},
          {value: 55663, label: '\u9ad8\u7891\u5e97\u4e61'},
          {value: 55664, label: '\u548c\u5e73\u8857\u8857\u9053'},
          {value: 55665, label: '\u9ed1\u5e84\u6237\u4e61'},
          {value: 55666, label: '\u547c\u5bb6\u697c\u8857\u9053'},
          {value: 55667, label: '\u5efa\u5916\u8857\u9053'},
          {value: 55668, label: '\u5c06\u53f0\u4e61'},
          {value: 55669, label: '\u91d1\u76cf\u4e61'},
          {value: 55670, label: '\u52b2\u677e\u8857\u9053'},
          {value: 55671, label: '\u9152\u4ed9\u6865\u8857\u9053'},
          {value: 55672, label: '\u6765\u5e7f\u8425\u4e61'},
          {value: 55673, label: '\u516d\u91cc\u5c6f\u8857\u9053'},
          {value: 55674, label: '\u9ea6\u5b50\u5e97\u8857\u9053'},
          {value: 55675, label: '\u5357\u78e8\u623f\u4e61'},
          {value: 55676, label: '\u6f58\u5bb6\u56ed\u8857\u9053'},
          {value: 55677, label: '\u5e73\u623f\u4e61'},
          {value: 55678, label: '\u4e09\u95f4\u623f\u4e61'},
          {value: 55679, label: '\u4e09\u91cc\u5c6f\u8857\u9053'},
          {value: 55680, label: '\u5341\u516b\u91cc\u5e97\u4e61'},
          {value: 55681, label: '\u9996\u90fd\u673a\u573a\u8857\u9053'},
          {value: 55682, label: '\u53cc\u4e95\u8857\u9053'},
          {value: 55683, label: '\u5b59\u6cb3\u4e61'},
          {value: 55684, label: '\u592a\u9633\u5bab\u4e61'},
          {value: 55685, label: '\u56e2\u7ed3\u6e56\u8857\u9053'},
          {value: 55686, label: '\u738b\u56db\u8425\u4e61'},
          {value: 55687, label: '\u671b\u4eac\u8857\u9053'},
          {value: 55688, label: '\u9999\u6cb3\u56ed\u8857\u9053'},
          {value: 55689, label: '\u5c0f\u5173\u8857\u9053'},
          {value: 55690, label: '\u5c0f\u7ea2\u95e8\u4e61'},
          {value: 55691, label: '\u4e9a\u8fd0\u6751\u8857\u9053'},
          {value: 55692, label: '\u5de6\u5bb6\u5e84\u8857\u9053'},
        ],
      },
      {value: 2800, label: '\u6d77\u6dc0\u533a'},
      {value: 2801, label: '\u897f\u57ce\u533a'},
      {value: 2802, label: '\u4e1c\u57ce\u533a'},
      {value: 2803, label: '\u5d07\u6587\u533a'},
      {value: 2804, label: '\u5ba3\u6b66\u533a'},
      {value: 2805, label: '\u4e30\u53f0\u533a'},
      {value: 2806, label: '\u77f3\u666f\u5c71\u533a'},
      {value: 2807, label: '\u95e8\u5934\u6c9f'},
      {value: 2808, label: '\u623f\u5c71\u533a'},
      {value: 2809, label: '\u901a\u5dde\u533a'},
      {value: 2810, label: '\u5927\u5174\u533a'},
      {value: 2812, label: '\u987a\u4e49\u533a'},
      {value: 2814, label: '\u6000\u67d4\u533a'},
      {value: 2816, label: '\u5bc6\u4e91\u533a'},
      {value: 2901, label: '\u660c\u5e73\u533a'},
      {value: 2953, label: '\u5e73\u8c37\u533a'},
      {value: 3065, label: '\u5ef6\u5e86\u533a'},
    ],
  },
  {
    value: 2,
    label: '上海',
    children: [
      {value: 78, label: '\u9ec4\u6d66\u533a'},
      {value: 2813, label: '\u5f90\u6c47\u533a'},
      {value: 2815, label: '\u957f\u5b81\u533a'},
      {value: 2817, label: '\u9759\u5b89\u533a'},
      {value: 2820, label: '\u95f8\u5317\u533a'},
      {value: 2822, label: '\u8679\u53e3\u533a'},
      {value: 2823, label: '\u6768\u6d66\u533a'},
      {value: 2824, label: '\u5b9d\u5c71\u533a'},
      {value: 2825, label: '\u95f5\u884c\u533a'},
      {value: 2826, label: '\u5609\u5b9a\u533a'},
      {value: 2830, label: '\u6d66\u4e1c\u65b0\u533a'},
      {value: 2833, label: '\u9752\u6d66\u533a'},
      {value: 2834, label: '\u677e\u6c5f\u533a'},
      {value: 2835, label: '\u91d1\u5c71\u533a'},
      {value: 2837, label: '\u5949\u8d24\u533a'},
      {value: 2841, label: '\u666e\u9640\u533a'},
      {value: 2919, label: '\u5d07\u660e\u533a'},
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
        <Button onClick={this.handleToggleSlideDownShow}>选择地区</Button>
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
          onLabelChange={labels => {
            console.log(labels);
            Toast.show(labels.join(','));
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
