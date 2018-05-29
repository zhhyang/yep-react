---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {TabBar, Icon} from '@jdcfe/lrc-m';
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
      <div>
        <div style={{backgroundColor: 'white', height: '100%', textAlign: 'center'}}>
          <div style={{paddingTop: 60}}>Clicked {this.state.index + 1} tab， </div>
          <a
            style={{display: 'block', marginTop: 40, marginBottom: 20, color: '#ec3838'}}
            onClick={e => {
              e.preventDefault();
              this.setState({
                hidden: !this.state.hidden,
              });
            }}
          >
            Click to show/hide tab-bar
          </a>
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
            icon={<Icon type="lego_yonghu" />}
            title="我的"
            badge={6}
            selectedIcon={<Icon type="lego_yonghu" color="#ec3838" />}
            selected={this.state.index === 1}
            onClick={() => this.onClick(1)}
          />
          <Tab
            icon="//placehold.it/24x24"
            title="他的"
            selectedIcon="//placehold.it/24x24"
            selected={this.state.index === 2}
            onClick={() => this.onClick(2)}
          />
          <Tab
            icon="//placehold.it/24x24"
            title="和的"
            selectedIcon="//placehold.it/24x24"
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
