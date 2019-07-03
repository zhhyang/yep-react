import * as React from 'react';
import classNames from 'classnames';
import noop from '../_utils/noop';

export interface File {
  url: string;
}

export interface ImagePickerProps {
  files?: File[];
  width?: string;
  height?: string;
  removeImage?: (params: any) => void;
  formDataAction?: (formData: object, dataUrl: object) => void;
  name?: string;
}

export default class ImagePicker extends React.PureComponent<ImagePickerProps> {
  static defaultProps = {
    files: [],
    width: '75px',
    height: '75px',
    removeImage: noop,
  };
  private input: HTMLInputElement | null;

  constructor(props: ImagePickerProps) {
    super(props);
    this.state = {};
    this.fileChange = this.fileChange.bind(this);
  }

  removeImagePriv(index: any) {
    const {removeImage = () => {}} = this.props;
    removeImage(index);
  }

  fileChange(e: any) {
    const {name, formDataAction} = this.props;
    const file = e.target.files[0];
    const imgFormData = new FormData();

    // 判断上传文件的类型，若不是jpeg jpg png gif类型，不执行上传操作
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
      return;
    }

    imgFormData.append(`${name}`, file);

    if (file.size > 500 * 1024) {
      return;
      // throw new Error('图片超过500k规定大小');
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const {currentTarget} = e;
      const dataUrl = currentTarget && currentTarget.result;
      if (!dataUrl) {
        return;
      }

      formDataAction && formDataAction(imgFormData, {url: dataUrl});
    };

    reader.readAsDataURL(file);

    if (this.input) {
      this.input.value = '';
    }
  }

  render() {
    const {files, name, height, width} = this.props;
    const wrapperCls = classNames('Yep-upload-wrapper');
    return (
      <div className={wrapperCls}>
        {files &&
          files.map((imgItem, index) => (
            /* eslint-disable react/no-array-index-key */
            <div className="upload-flex-item" key={index}>
              <div
                className="upload-flex-item-del"
                onClick={() => {
                  this.removeImagePriv(index);
                }}
              />
              <div
                className="upload-flex-item-img"
                style={{width: width, height: height, backgroundImage: `url(${imgItem.url})`}}
              />
            </div>
          ))}
        <div className="upload-flex-item upload-add">
          <div className="upload-add-picker" style={{width: width, height: height}}>
            <input
              ref={input => {
                this.input = input;
              }}
              type="file"
              name={name}
              accept="image/*"
              onChange={this.fileChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
