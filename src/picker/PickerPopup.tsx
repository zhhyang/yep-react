import * as React from 'react';
import Popup from '../popup';
import noop from '../_utils/noop';
import classNames from 'classnames';

export interface PickerPopupProps {
  /**
   * 是否显示
   */
  show?: boolean;
  /**
   * 标题
   */
  title?: string;
  /**
   * 关闭事件回调
   */
  onCancel?: () => void;
  /**
   * 确定事件回调
   */
  onOk?: (value: any) => void;

  className?: string;

  picker: any;
}
export default class PickerPopup extends React.PureComponent<PickerPopupProps> {
  picker: any;

  static defaultProps = {
    show: false,
    onOk: noop,
    onCancel: noop,
    title: '',
  };

  onOk = () => {
    if (this.props.onOk) {
      this.props.onOk(this.picker.getValue());
    }
  };

  saveRef = (picker: any) => {
    this.picker = picker;
  };

  render() {
    const {show, onCancel, title, picker, className} = this.props;

    return (
      <Popup show={show} onCancel={onCancel}>
        <div className={classNames('Yep-popup-picker-wrapper', className)}>
          <div className="Yep-popup-picker-header">
            <div className="Yep-popup-picker-header-item Yep-popup-picker-header-left" onClick={onCancel}>
              取消
            </div>
            <div className="Yep-popup-picker-header-item Yep-popup-picker-header-title">{title}</div>
            <div className="Yep-popup-picker-header-item Yep-popup-picker-header-right" onClick={this.onOk}>
              确定
            </div>
          </div>
          {React.cloneElement(picker, {ref: this.saveRef})}
        </div>
      </Popup>
    );
  }
}
