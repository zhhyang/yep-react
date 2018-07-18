import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Popup from '../popup';
import noop from '../_utils/noop';

export default class PickerPopup extends PureComponent {
  static propTypes = {
    /**
     * 是否显示
     */
    show: PropTypes.bool,
    /**
     * 标题
     */
    title: PropTypes.string,
    /**
     * 关闭事件回调
     */
    onCancel: PropTypes.func,
    /**
     * 确定事件回调
     */
    onOk: PropTypes.func,
    children: PropTypes.any,
  };

  static defaultProps = {
    show: false,
    onOk: noop,
    onCancel: noop,
    title: '',
  };

  onOk = (v: any) => {
    if (this.props.onOk) {
      this.props.onOk(v);
    }
  };

  render() {
    const {show, onCancel, title, children} = this.props;

    return (
      <Popup show={show} onCancel={onCancel}>
        <div className="Yep-popup-picker-wrapper">
          <div className="Yep-popup-picker-header">
            <div className="Yep-popup-picker-header-item Yep-popup-picker-header-left" onClick={onCancel}>
              取消
            </div>
            <div className="Yep-popup-picker-header-item Yep-popup-picker-header-title">{title}</div>
            <div className="Yep-popup-picker-header-item Yep-popup-picker-header-right" onClick={this.onOk}>
              确定
            </div>
          </div>
          {children}
        </div>
      </Popup>
    );
  }
}
