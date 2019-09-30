---
order: 2
title: 多个吸顶块
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';

import {Sticky, List} from '@jdcfe/yep-react';
const {StickyContainer} = Sticky;
const {Item} = List;

const containerBg = i => `hsl(${i * 40}, 70%, 90%)`;
const headerBg = i => `hsl(${i * 40}, 70%, 50%)`;
const data = {
  A: [{label: '安徽', id: '01'}, {label: '澳门特别行政区', id: '340'}],
  B: [{label: '北京', id: '01'}],
  C: [{label: '重庆', id: '01'}],
  F: [{label: '福建', id: '01'}],
  G: [
    {label: '广州', id: '01'},
    {label: '广东', id: '340'},
    {label: '广西', id: '341'},
    {label: '甘肃', id: '342'},
    {label: '贵州', id: '343'},
  ],
  H: [
    {label: '河南', id: '01'},
    {label: '河北', id: '340'},
    {label: '湖南', id: '341'},
    {label: '湖北', id: '342'},
    {label: '海南', id: '343'},
    {label: '黑龙江', id: '344'},
  ],
  J: [{label: '江西', id: '01'}, {label: '江苏', id: '340'}, {label: '吉林', id: '341'}],
  L: [{label: '辽宁', id: '01'}],
  Q: [{label: '青海', id: '01'}],
  S: [
    {label: '四川', id: '01'},
    {label: '陕西', id: '340'},
    {label: '山东', id: '341'},
    {label: '山西', id: '342'},
    {label: '上海', id: '343'},
  ],
  T: [{label: '台湾', id: '01'}, {label: '天津', id: '340'}],
  X: [{label: '香港特别行政区', id: '01'}],
  Y: [{label: '云南', id: '01'}],
  Z: [{label: '浙江', id: '01'}],
};
class Header extends React.Component {
  static defaultProps = {
    className: '',
  };
  render() {
    const {style, name} = this.props;
    return (
      <div className={'sticky-header1 Yep-list-body'}>
        <Item
          style={{
            ...style,
            zIndex: 3,
            color: '#121212',
            fontSize: '0.34rem',
            backgroundColor: '#f6f9fa',
          }}
        >
          {name}
        </Item>
      </div>
    );
  }
}

class Demo extends React.Component {
  render() {
    const keys = Object.keys(data);
    return (
      <div className="yep-list">
        {keys.map(i => (
          <StickyContainer key={i}>
            <Sticky>{({style}) => <Header style={{...style, background: headerBg(i)}} name={i} />}</Sticky>
            {data[i].map(p => (
              <Item>{p.label}</Item>
            ))}
          </StickyContainer>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
