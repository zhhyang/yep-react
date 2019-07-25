---
order: 0
title: 基础用法
description: 可配置默认展开、默认不展开效果
---

```js
import React from 'react';
import {Collapse} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '三体',
      cont:
        '《三体》是刘慈欣创作的系列长篇科幻小说，由《三体》、《三体Ⅱ·黑暗森林》、《三体Ⅲ·死神永生》组成，第一部于2006年5月起在《科幻世界》杂志上连载，第二部于2008年5月首次出版，第三部则于2010年11月出版。',
    };
  }

  render() {
    const {cont, title} = this.state;
    return (
      <div className="collapse">
        <h4 className={'collapse-type'}>默认不展开：</h4>
        <Collapse title={title}>{cont}</Collapse>
        <h4 className={'collapse-type'}>默认展开：</h4>
        <Collapse title={title} isOpen={true}>
          {cont}
        </Collapse>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
