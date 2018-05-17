---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Upload} from '@jdcfe/lrc-m';

class UploadDemo extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      files: [
        {
          url:
            'https://img12.360buyimg.com/mobilecms/s140x140_jfs/t15502/344/609174093/288569/bf1a1744/5a377ae2N1fdb98cb.jpg',
        },
        {
          url:
            'https://img11.360buyimg.com/mobilecms/s140x140_jfs/t12055/16/2690023715/376068/6df77bbe/5a4b4fbbN31dcbd6c.jpg',
        },
        {
          url:
            'https://img14.360buyimg.com/mobilecms/s140x140_jfs/t16972/240/2218955674/343973/8b6a4c90/5aed4549N0a8b0eb0.jpg',
        },
        {url: 'http://git.jd.com/uploads/-/system/user/avatar/2143/avatar.png'},
      ],
    };

    this.addImage = this.addImage.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  addImage(imgItem) {
    this.setState({
      files: this.state.files.concat([imgItem]),
    });
  }
  removeImage(index) {
    const {files} = this.state;
    files.splice(index, 1);
    this.setState({
      files: [].concat(files),
    });
  }

  render() {
    const {files} = this.state;
    return (
      <div className="demo-list">
        <div className="demo-list-header">基础upload组件</div>
        <div className="demo-list-body">
          <Upload files={files} addImage={this.addImage} removeImage={this.removeImage} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<UploadDemo />, mountNode);
```
