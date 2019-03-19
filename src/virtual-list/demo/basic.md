---
order: 0
title: 基础用法
description:
---

```js
import {VirtualList} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

const dataSource = [];

const generateLi = (index = 'index') => {
  const data = [];
  if (index % 2 === 0) {
    return (
      <li key={`key-${index}`} style={{lineHeight: '20px', background: '#ec3838', color: '#fff'}}>
        key-{index}
      </li>
    );
  } else {
    return (
      <li key={`key-${index}`} style={{lineHeight: '20px'}}>
        key-{index}
      </li>
    );
  }
};

for (let i = 0; i < 1000; i++) {
  dataSource.push(generateLi(i));
}

class Demo extends React.PureComponent {
  render() {
    return (
      <ComponentCard title="基础用法">
        <div className={'virtual-box'}>
          <VirtualList>{dataSource}</VirtualList>
        </div>
      </ComponentCard>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
