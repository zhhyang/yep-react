import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';

import Popup from '../popup';
import Picker from './Picker';

export default class PopupPicker extends PureComponent {
  static propTypes = {
    /**
     * 是否显示
     */
    show: PropTypes.bool,
    /**
     * 关闭事件回调
     */
    onCancel: PropTypes.func,
    /**
     * 确定事件回调
     */
    onOk: PropTypes.func,
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.array,
    /**
     * 默认选中的数据
     */
    defaultSelectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    show: false,
    onCancel: () => {},
    prefixCls: 'Yep-picker',
    data: [],
  };

  constructor(props) {
    super(props);
    let selectedValueState;
    const {selectedValue, defaultSelectedValue, data} = props;
    if (selectedValue !== undefined) {
      selectedValueState = selectedValue;
    } else if (defaultSelectedValue !== undefined) {
      selectedValueState = defaultSelectedValue;
    } else {
      selectedValueState = data && data[0] && data[0];
    }
    this.state = {
      selectedValue: selectedValueState,
    };
    this.handleOnOk = this.handleOnOk.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleOnOk() {
    const {onOk} = this.props;
    onOk(this.state.selectedValue);
  }

  handleValueChange(v) {
    this.setState({
      selectedValue: v,
    });
  }

  render() {
    const {show, onCancel, title, ...restProps} = this.props;

    return (
      <Popup show={show} onCancel={onCancel}>
        <div className="Yep-popup-picker-wrapper">
          <div className="Yep-popup-picker-header">
            <div className="Yep-popup-picker-header-item Yep-popup-picker-header-left" onClick={onCancel}>
              取消
            </div>
            <div className="Yep-popup-picker-header-item Yep-popup-picker-header-title">{title}</div>
            <div className="Yep-popup-picker-header-item Yep-popup-picker-header-right" onClick={this.handleOnOk}>
              确定
            </div>
          </div>
          <Picker onValueChange={this.handleValueChange} {...restProps} />
        </div>
      </Popup>
    );
  }
}
