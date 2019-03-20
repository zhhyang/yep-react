---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Badge, List} from '@jdcfe/yep-react';
import ComponentCard from 'ComponentCard';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <ComponentCard title="基础用法">
          <Badge text={8}>
            <div className="shop-image" />
          </Badge>
          <div className="badge-text">待收货</div>
        </ComponentCard>
        <ComponentCard title="最大数">
          <Badge text={200}>
            <div className="shop-image" />
          </Badge>
          <div className="badge-text">待收货</div>
        </ComponentCard>
        <ComponentCard title="自定义最大数">
          <Badge text={77} max={55} />
          <div className="badge-text">有未读消息</div>
        </ComponentCard>

        <ComponentCard title="小红点">
          <Badge dot>
            <div className="shop-image" />
          </Badge>
          <div className="badge-text">有未读消息</div>
        </ComponentCard>
        <ComponentCard title="自定义文字和颜色">
          <Badge text={'new'} />
          <Badge text="券" style={{marginLeft: 12, padding: '0 3px', backgroundColor: '#f19736', borderRadius: 2}} />
          <Badge text="NEW" style={{marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2}} />
          <Badge
            text="凭处方退诊费"
            style={{
              marginLeft: 5,
              padding: '0 2px',
              backgroundColor: '#fff',
              borderRadius: 2,
              fontSize: 11,
              color: '#ED2945',
              border: '1px solid #ED2945',
            }}
          />
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
