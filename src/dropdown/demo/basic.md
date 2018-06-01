---
order: 0
title: 基础用法
description: 
---

```js
import React from 'react';
import {Dropdown} from "@jdcfe/lrc-m";

class Demo extends React.PureComponent {

  render() {
    return (
      <div>
        <Dropdown>
          <Dropdown.DropdownToggle>
            <button>Open</button>
          </Dropdown.DropdownToggle>
          <Dropdown.DropdownMenu>
            Nullam quis risus eget urna mollis
            ornare vel eu leo. Cum sociis natoque
            penatibus et magnis dis parturient montes
          </Dropdown.DropdownMenu>
        </Dropdown>
    </div>
    );
  }
}

ReactDOM.render(<Demo/>,  mountNode);

```
    
