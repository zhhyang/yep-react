---
order: 6
title: 自定义图标
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Checkbox, WhiteSpace, Icon} from '@jdcfe/yep-react';
const {Star} = Icon;
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Checkbox icon={<Star className="Yep-checkbox-inner" style={{color: '#F0250F'}} />}>选项1</Checkbox>
        <WhiteSpace />
        <Checkbox icon={<Star className="Yep-checkbox-inner" style={{color: '#F0250F'}} />}>选项2</Checkbox>
        <WhiteSpace />
        <Checkbox icon={<Star className="Yep-checkbox-inner" style={{color: '#F0250F'}} />}>选项3</Checkbox>
        <WhiteSpace />
        <Checkbox icon={<Star className="Yep-checkbox-inner" style={{color: '#F0250F'}} />}>选项4</Checkbox>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
