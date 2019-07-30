---
order: 0
title: 基础用法
description: 固定在底部，支持自定义图标以及样式，切换可跳转页面。
---

```js
import React from 'react';
import {TabBar, Icon} from '@jdcfe/yep-react';
const {Tab} = TabBar;

class Demo extends React.PureComponent {
  state = {
    index: 0,
    hidden: false,
  };

  onClick = index => {
    this.setState({
      index,
    });
  };
  render() {
    return (
      <div style={{height: '8rem', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
        <div style={{justifySelf: 'center', alignSelf: 'center'}}>
          <div>点击第 {this.state.index + 1} 个tab</div>
          <div
            style={{display: 'block', marginTop: 40, marginBottom: 20, color: '#ec3838'}}
            onClick={() => {
              this.setState({
                hidden: !this.state.hidden,
              });
            }}
          >
            点我 展示/隐藏 底部tab-bar
          </div>
        </div>

        <TabBar hidden={this.state.hidden}>
          <Tab
            icon={<Icon type="dongdong" />}
            title="首页"
            dot
            selectedIcon={<Icon type="dongdong" color="#ec3838" />}
            selected={this.state.index === 0}
            onClick={() => this.onClick(0)}
          />
          <Tab
            icon={<Icon type="category" />}
            title="分类"
            badge={6}
            selectedIcon={<Icon type="category" />}
            selected={this.state.index === 1}
            onClick={() => this.onClick(1)}
          />
          <Tab
            icon={<Icon type="lego_gouwuche" />}
            title="购物车"
            selectedIcon={<Icon type="lego_gouwuche" />}
            selected={this.state.index === 2}
            onClick={() => this.onClick(2)}
          />
          <Tab
            icon={<Icon type="lego_yonghu" />}
            title="我的"
            selectedIcon={<Icon type="lego_yonghu" />}
            selected={this.state.index === 3}
            onClick={() => this.onClick(3)}
          />
        </TabBar>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
