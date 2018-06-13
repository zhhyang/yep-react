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
class Demo extends React.PureComponent {
  render() {
    const data = {
      A: [
        {label: '安徽省', value: '34'},
        {label: '安徽省0', value: '340'},
        {label: '安徽省1', value: '341'},
        {label: '安徽省2', value: '342'},
        {label: '安徽省3', value: '343'},
      ],
      B: [
        {label: '北京市', value: '01'},
        {label: '北京市0', value: '340'},
        {label: '北京市1', value: '341'},
        {label: '北京市2', value: '342'},
        {label: '北京市3', value: '343'},
      ],
      C: [
        {label: '北京市', value: '01'},
        {label: '北京市0', value: '340'},
        {label: '北京市1', value: '341'},
        {label: '北京市2', value: '342'},
        {label: '北京市3', value: '343'},
      ],
      D: [
        {label: '北京市', value: '01'},
        {label: '北京市0', value: '340'},
        {label: '北京市1', value: '341'},
        {label: '北京市2', value: '342'},
        {label: '北京市3', value: '343'},
      ],
      E: [
        {label: '北京市', value: '01'},
        {label: '北京市0', value: '340'},
        {label: '北京市1', value: '341'},
        {label: '北京市2', value: '342'},
        {label: '北京市3', value: '343'},
      ],
      F: [
        {label: '北京市', value: '01'},
        {label: '北京市0', value: '340'},
        {label: '北京市1', value: '341'},
        {label: '北京市2', value: '342'},
        {label: '北京市3', value: '343'},
      ],
      G: [
        {label: '北京市', value: '01'},
        {label: '北京市0', value: '340'},
        {label: '北京市1', value: '341'},
        {label: '北京市2', value: '342'},
        {label: '北京市3', value: '343'},
      ],
      H: [
        {label: '北京市', value: '01'},
        {label: '北京市0', value: '340'},
        {label: '北京市1', value: '341'},
        {label: '北京市2', value: '342'},
        {label: '北京市3', value: '343'},
      ],
      I: [
        {label: '北京市', value: '01'},
        {label: '北京市0', value: '340'},
        {label: '北京市1', value: '341'},
        {label: '北京市2', value: '342'},
        {label: '北京市3', value: '343'},
      ],
      J: [
        {label: '北京市', value: '01'},
        {label: '北京市0', value: '340'},
        {label: '北京市1', value: '341'},
        {label: '北京市2', value: '342'},
        {label: '北京市3', value: '343'},
      ],
    };
    return (
      <div>
        <IndexedList
          showIndicator
          indexedBarStyle={{top: 170}}
          data={data}
          renderRow={rowData => <Item>{rowData}</Item>}
          renderSectionWrapper={sectionId => (
            <StickyContainer key={`s_${sectionId}_c`} className="sticky-container" style={{zIndex: 4}} />
          )}
          renderSectionHeader={sectionData => (
            <Sticky>
              {({style}) => (
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
