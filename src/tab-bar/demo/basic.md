---
order: 0
title: 基础用法
description: 固定在底部，支持自定义图标以及样式，切换可跳转页面。
---

```js
import React from 'react';
import {TabBar, Icon} from '@jdcfe/yep-react';
const {Tab} = TabBar;
import {HomeOutlined, CartOutlined, MineOutlined, RankOutlined} from '@jdcfe/icons-react';
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
            icon={<HomeOutlined className="Yep-icon-md" />}
            title="首页"
            dot
            selectedIcon={<HomeOutlined className="Yep-icon-md" color="#ec3838" />}
            selected={this.state.index === 0}
            onClick={() => this.onClick(0)}
          />
          <Tab
            icon={<RankOutlined className="Yep-icon-md" />}
            title="排行"
            badge={6}
            selectedIcon={<RankOutlined className="Yep-icon-md" color="#ec3838" />}
            selected={this.state.index === 1}
            onClick={() => this.onClick(1)}
          />
          <Tab
            icon={<CartOutlined className="Yep-icon-md" />}
            title="购物车"
            selectedIcon={<CartOutlined className="Yep-icon-md" color="#ec3838" />}
            selected={this.state.index === 2}
            onClick={() => this.onClick(2)}
          />
          <Tab
            icon={<MineOutlined className="Yep-icon-md" />}
            title="我的"
            selectedIcon={<MineOutlined className="Yep-icon-md" color="#ec3838" />}
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
