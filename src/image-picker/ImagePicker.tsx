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
}
export default class ImagePicker extends React.PureComponent<ImagePickerProps> {
  static defaultProps = {
    files: [],
    size: '75px',
    addImage: noop,
    removeImage: noop,
    // multiple: false,
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
    const file = e.target.files[0];

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
    const {files, size} = this.props;
    const wrapperCls = classNames('Yep-upload-wrapper');
    return (
      <div className={wrapperCls}>
        {files && files.map((imgItem, index) => (
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
              accept="image/*"
              onChange={this.fileChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
