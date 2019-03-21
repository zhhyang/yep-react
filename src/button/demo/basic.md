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
        <ComponentCard title="常规按钮">
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
        </ComponentCard>
        <ComponentCard title="常规按钮(小尺寸)">
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
        </ComponentCard>
        <WhiteSpace />
        <ComponentCard title="均分按钮">
          <div style={{backgroundColor: '#F6F6F6', height: '1.4rem', display: 'flex', justifyContent: 'center'}}>
            <ButtonGroup style={{width: '6.9rem'}}>
              <Button>取消</Button>
              <Button type="primary">确定</Button>
            </ButtonGroup>
          </div>
        </ComponentCard>
        <ComponentCard title="通栏按钮">
          <Button type="primary" block>
            登录
          </Button>
        </ComponentCard>

        <WhiteSpace />
        <ComponentCard title="圆角按钮-常规">
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
        </ComponentCard>
        <WhiteSpace />
        <ComponentCard title="圆角按钮-标签">
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
        </ComponentCard>
        <WhiteSpace />
        <ComponentCard title="商品属性选择">
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
        </ComponentCard>
        <ComponentCard title="自定义组件">
          <Button style={{width: '100%', backgroundColor: '#2A83E1', color: '#FFFFFF'}}>
            下一步，上传医师认证相关证书
          </Button>
        </ComponentCard>
        <WhiteSpace />
        <ComponentCard title="带Icon按钮">
          <Button icon="lego_jiazai" circle size="sm">
            Loading
          </Button>
          <Button type="ghost" icon="delete" circle size="sm">
            快速清理
          </Button>
        </ComponentCard>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
