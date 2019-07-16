---
order: 0
title: 基础用法
description: 左侧展示字母对应的列表数据，右侧展示按字母顺序排列的字母列表。当滚动页面或者滑动右侧字母列表时，左侧字母标题吸顶并且依次滚动到对应位置，对应的右侧字母被选中。
---

```js
import React from 'react';
import {IndexedList, List, Sticky} from '@jdcfe/yep-react';
const {Item} = List;
const {StickyContainer} = Sticky;

class Header extends React.Component {
  static defaultProps = {
    className: '',
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isSticky !== this.props.isSticky && nextProps.isSticky) {
      this.props.change(nextProps.sectionData);
    }
  }
  render() {
    const {style, sectionData} = this.props;
    return (
      <div
        className="sticky"
        style={{
          ...style,
          zIndex: 3,
          color: '#121212',
          fontSize: '0.34rem',
          backgroundColor: '#f6f9fa',
        }}
      >
        {sectionData}
      </div>
    );
  }
}

class Demo extends React.PureComponent {
  state = {
    key: '',
  };

  change = key => {
    this.setState({key});
  };

  render() {
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
    return (
      <div>
        <IndexedList
          showIndicator
          indexedBarStyle={{top: 170}}
          data={data}
          activeBar={this.state.key}
          renderRow={rowData => <Item>{rowData.label}</Item>}
          enableQuickIndexedBarTop={false}
          onQuickSearch={this.change}
          keyLabel="id"
          renderSectionWrapper={sectionId => (
            <StickyContainer key={`s_${sectionId}_c`} className="sticky-container" style={{zIndex: 4}} />
          )}
          renderSectionHeader={sectionData => (
            <Sticky>
              {({style, isSticky}) => (
                <Header change={this.change} sectionData={sectionData} style={style} isSticky={isSticky} />
              )}
            </Sticky>
          )}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
