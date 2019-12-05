---
order: 2
title: 自定义上传图片大小
description: customSize设置为0时表示默认上传1M的图片，不设置customSize表示不限制图片大小。
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

    this.removeImage = this.removeImage.bind(this);
  }

  formDataAction = (formData, imgDataUrl) => {
    fetch('http://10.1.53.66:8081/#/component/image-picker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: formData,
    }).then(res => {
      console.log(res, 'res');
    });
    this.setState({
      files: this.state.files.concat([imgDataUrl]),
    });
  };

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
          removeImage={this.removeImage}
          customSize={0}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
