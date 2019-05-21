---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Price} from '@jdcfe/yep-react';
import {ComponentCard} from 'ComponentCard';

class Demo extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ComponentCard title={'常规用法'}>
          <div className="price-list">
            <div className="price-item-wrap">
              <label>默认</label>
              <div className="price-item">
                <Price value="36.00" />
              </div>
            </div>

            <div className="price-item-wrap">
              <label>默认-人民币</label>
              <div className="price-item">
                <Price value="￥36.00" />
              </div>
            </div>

            <div className="price-item-wrap">
              <label>默认-美元</label>
              <div className="price-item">
                <Price value="$36.00" />
              </div>
            </div>

            <div className="price-item-wrap">
              <label>正常</label>
              <div className="price-item">
                <Price value="36.00" symPos="normal" decPos="normal" />
              </div>
            </div>

            <div className="price-item-wrap">
              <label>小数右上</label>
              <div className="price-item">
                <Price value="36.00" symPos="normal" decPos="sup" />
              </div>
            </div>

            <div className="price-item-wrap">
              <label>货币符号左上&小数右上</label>
              <div className="price-item">
                <Price value="36.00" symPos="sup" decPos="sup" />
              </div>
            </div>

            <div className="price-item-wrap">
              <label>货币符号居下&小数右上</label>
              <div className="price-item">
                <Price value="36.00" symPos="sub" decPos="sup" />
              </div>
            </div>

            <div className="price-item-wrap">
              <label>只保留一位小数</label>
              <div className="price-item">
                <Price value="36.00" symPos="sub" decPos="sup" decLength="1" />
              </div>
            </div>

            <div className="price-item-wrap">
              <label>不要小数</label>
              <div className="price-item">
                <Price value="36.00" symPos="sub" decPos="sup" decLength="0" />
              </div>
            </div>

            <div className="price-item-wrap">
              <label>删除状态</label>
              <div className="price-item">
                <Price value="36.00" symPos="sub" decPos="sup" decLength="0" status="del" />
              </div>
            </div>

            <div className="price-item-wrap">
              <label>自定义样式</label>
              <div className="price-item">
                <Price
                  value="36.00"
                  symPos="sub"
                  decPos="sup"
                  decNum="0"
                  className="yec-cont"
                  symClassName="yec-sym"
                  intClassName="yec-int"
                  decClassName="yec-dec"
                />
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
