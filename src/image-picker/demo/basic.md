---
order: 0
title: 基础用法
description: 支持图片选择，上传和删除。
---

```js
import React from 'react';
import {ImagePicker} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
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

  formDataAction(formData) {
    fetch('http://10.1.53.66:8081/#/component/image-picker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: formData,
    }).then(res => {
      console.log(res, 'res');
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
      <div>
        <ImagePicker
          files={files}
          name={'imgFormData'}
          formDataAction={this.formDataAction}
          addImage={this.addImage}
          removeImage={this.removeImage}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
