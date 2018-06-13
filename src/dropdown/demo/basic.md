---
order: 0
title: 基础用法
description: 
---

```js
import React from 'react';
import {Dropdown} from "@jdcfe/yep-react";

class Demo extends React.PureComponent {

  render() {
    return (
      <div>
        <Dropdown >
          <Dropdown.DropdownToggle>
            <button>Open</button>
          </Dropdown.DropdownToggle>
          <Dropdown.DropdownMenu>
           这是一个下拉框
          </Dropdown.DropdownMenu>
        </Dropdown>
    </div>
    );
  }
}

ReactDOM.render(<Demo/>,  mountNode);

```
    
