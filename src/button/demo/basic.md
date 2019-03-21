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
        <div>
          <Button
            type="primary"
            onClick={() => {
              alert('去结算');
            }}
          >
            去结算
          </Button>
          <Button type="primary" disabled>
            去结算
          </Button>
        </div>
        <WhiteSpace />
        <div>
          <Button
            size="sm"
            type="primary"
            onClick={() => {
              alert('去结算');
            }}
          >
            去结算
          </Button>
          <Button type="primary" size="sm" disabled>
            去结算
          </Button>
        </div>
        <WhiteSpace />
        <div style={{backgroundColor: '#F6F6F6', height: '1.4rem', display: 'flex', justifyContent: 'center'}}>
          <ButtonGroup style={{width: '6.9rem'}}>
            <Button>取消</Button>
            <Button type="primary">确定</Button>
          </ButtonGroup>
        </div>
        <WhiteSpace />

        <Button type="primary" block>
          登录
        </Button>
        <WhiteSpace />
        <div>
          <Button
            type="ghost"
            circle
            size="sm"
            onClick={() => {
              alert('ghost');
            }}
          >
            确认收货
          </Button>
          <Button
            circle
            size="sm"
            onClick={() => {
              alert('ghost');
            }}
          >
            再次购买
          </Button>
          <Button
            type="fill"
            circle
            size="sm"
            onClick={() => {
              alert('ghost');
            }}
          >
            查看物流
          </Button>
          <Button
            type="light"
            circle
            size="sm"
            onClick={() => {
              alert('ghost');
            }}
          >
            降价通知
          </Button>
        </div>
        <WhiteSpace />
        <div>
          <Button
            type="primary"
            circle
            size="sm"
            onClick={() => {
              alert('京东快递');
            }}
          >
            京东快递
          </Button>
          <Button
            circle
            type="lightred"
            size="xxs"
            onClick={() => {
              alert('ghost');
            }}
          >
            好评 6.6万
          </Button>
          <Button
            type="checked"
            circle
            size="xxs"
            onClick={() => {
              alert('ghost');
            }}
            icon="shop-baocun"
          >
            全部100万
          </Button>
        </div>
        <WhiteSpace />
        <div>
          <Button
            type="checked"
            circle
            size="sm"
            onClick={() => {
              alert('京东快递');
            }}
          >
            象牙白
          </Button>
          <Button
            circle
            type="fill"
            size="sm"
            onClick={() => {
              alert('ghost');
            }}
          >
            皓月灰
          </Button>
          <Button
            type="dashed"
            circle
            size="sm"
            onClick={() => {
              alert('ghost');
            }}
          >
            晶钻蓝
          </Button>
        </div>
        <Button style={{width: '100%', backgroundColor: '#2A83E1', color: '#FFFFFF'}}>
          下一步，上传医师认证相关证书
        </Button>
        <WhiteSpace />
        <Button icon="lego_jiazai" circle size="sm">
          Loading
        </Button>
        <WhiteSpace />
        <Button type="ghost" icon="delete" circle size="sm">
          快速清理
        </Button>

        <WhiteSpace />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
