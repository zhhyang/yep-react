import * as React from 'react';
import classNames from 'classnames';
import noop from '../_utils/noop';

export interface File {
  url: string;
}

export interface ImagePickerProps {
  files?: File[];
  size?: string;
  addImage?: (params: any) => void;
  removeImage?: (params: any) => void;
  formDataAction?: (params: any) => void;
  name?: string;
}

export default class ImagePicker extends React.PureComponent<ImagePickerProps> {
  static defaultProps = {
    files: [],
    size: '75px',
    addImage: noop,
    removeImage: noop,
  };
  private input: HTMLInputElement | null;

  constructor(props: ImagePickerProps) {
    super(props);
    this.state = {};
    this.fileChange = this.fileChange.bind(this);
  }

  addImagePriv(imgItem: object) {
    const {addImage = () => {}} = this.props;
    addImage(imgItem);
  }

  removeImagePriv(index: any) {
    const {removeImage = () => {}} = this.props;
    removeImage(index);
  }

  fileChange(e: any) {
    const {name, formDataAction} = this.props;
    const file = e.target.files[0];
    const imgFormData = new FormData();

    // 判断上传文件的类型，若不是image/jpeg类型，不执行上传操作
    if (file.type !== 'image/jpeg') {
      return;
    }

    imgFormData.append(`${name}`, file);
    formDataAction && formDataAction(imgFormData);

    if (file.size > 500 * 1024) {
      throw new Error('图片超过500k规定大小');
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const {currentTarget} = e;
      const dataUrl = currentTarget && currentTarget.result;
      if (!dataUrl) {
        return;
      }

      this.addImagePriv({
        url: dataUrl,
      });
    };

    reader.readAsDataURL(file);
    if (this.input) {
      this.input.value = '';
    }
  }

  render() {
    const {files, size, name} = this.props;
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
                style={{width: size, height: size, backgroundImage: `url(${imgItem.url})`}}
              />
            </div>
          ))}
        <div className="upload-flex-item upload-add">
          <div className="upload-add-picker" style={{width: size, height: size}}>
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
