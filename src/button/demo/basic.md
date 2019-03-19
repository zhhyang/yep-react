---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Button, WhiteSpace} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';
const {ButtonGroup} = Button;
class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <ComponentCard title={'常规按钮'}>
          <Button
            onClick={() => {
              alert('default');
            }}
          >
            default
          </Button>
          <WhiteSpace />
          <Button disabled>default disabled</Button>
          <WhiteSpace />
          <Button
            type="primary"
            onClick={() => {
              alert('primary');
            }}
          >
            primary
          </Button>
          <WhiteSpace />
          <Button type="primary" disabled>
            primary disabled
          </Button>
          <WhiteSpace />
          <Button
            type="ghost"
            onClick={() => {
              alert('ghost');
            }}
          >
            ghost
          </Button>
          <WhiteSpace />
          <Button
            type="ghost"
            disabled
            onClick={() => {
              alert('ghost');
            }}
          >
            ghost disabled
          </Button>
        </ComponentCard>

        <WhiteSpace />
        <ComponentCard title={'状态按钮'}>
          <Button size="md" style={{backgroundColor: '#2A83E1', color: '#FFFFFF', border: 0}}>
            下一步，上传医师认证相关证书
          </Button>
          <WhiteSpace />
          <Button icon="lego_jiazai">Loading Button</Button>
          <WhiteSpace />
          <Button icon="delete">with icon</Button>
        </ComponentCard>

        <ComponentCard title={'inline / small 按钮'}>
          <Button size="sm" inline type="primary">
            small
          </Button>
          <Button size="sm" inline>
            small
          </Button>
          <WhiteSpace />
          <Button inline>inline</Button>
          <WhiteSpace />
          <Button submit>Submit</Button>
          <WhiteSpace />
        </ComponentCard>
        <ComponentCard title={'应用示例'}>
          <ButtonGroup>
            <Button>确定</Button>
            <Button type="primary">取消</Button>
          </ButtonGroup>
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
