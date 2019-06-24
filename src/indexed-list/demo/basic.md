---
order: 0
title: 基础用法
description:
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
          backgroundColor: sectionData.charCodeAt(0) % 2 ? '#5890ff' : '#F8591A',
          color: 'white',
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
      A: [
        {label: '安徽省', id: '34'},
        {label: '安徽省0', id: '340'},
        {label: '安徽省1', id: '341'},
        {label: '安徽省2', id: '342'},
        {label: '安徽省3', id: '343'},
      ],
      B: [
        {label: '北京市', id: '01'},
        {label: '北京市0', id: '340'},
        {label: '北京市1', id: '341'},
        {label: '北京市2', id: '342'},
        {label: '北京市3', id: '343'},
      ],
      C: [
        {label: '北京市', id: '01'},
        {label: '北京市0', id: '340'},
        {label: '北京市1', id: '341'},
        {label: '北京市2', id: '342'},
        {label: '北京市3', id: '343'},
      ],
      D: [
        {label: '北京市', id: '01'},
        {label: '北京市0', id: '340'},
        {label: '北京市1', id: '341'},
        {label: '北京市2', id: '342'},
        {label: '北京市3', id: '343'},
      ],
      E: [
        {label: '北京市', id: '01'},
        {label: '北京市0', id: '340'},
        {label: '北京市1', id: '341'},
        {label: '北京市2', id: '342'},
        {label: '北京市3', id: '343'},
      ],
      F: [
        {label: '北京市', id: '01'},
        {label: '北京市0', id: '340'},
        {label: '北京市1', id: '341'},
        {label: '北京市2', id: '342'},
        {label: '北京市3', id: '343'},
      ],
      G: [
        {label: '北京市', id: '01'},
        {label: '北京市0', id: '340'},
        {label: '北京市1', id: '341'},
        {label: '北京市2', id: '342'},
        {label: '北京市3', id: '343'},
      ],
      H: [
        {label: '北京市', id: '01'},
        {label: '北京市0', id: '340'},
        {label: '北京市1', id: '341'},
        {label: '北京市2', id: '342'},
        {label: '北京市3', id: '343'},
      ],
      I: [
        {label: '北京市', id: '01'},
        {label: '北京市0', id: '340'},
        {label: '北京市1', id: '341'},
        {label: '北京市2', id: '342'},
        {label: '北京市3', id: '343'},
      ],
      J: [
        {label: '北京市', id: '01'},
        {label: '北京市0', id: '340'},
        {label: '北京市1', id: '341'},
        {label: '北京市2', id: '342'},
        {label: '北京市3', id: '343'},
      ],
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
