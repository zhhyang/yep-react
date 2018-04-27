import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {CSSTransition} from 'react-transition-group';
import Mask from "../mask";

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
export default class Popup extends PureComponent {

  static propTypes = {
    /**
     * 是否显示
     */
    show: PropTypes.bool,
    /**
     * popup弹出动画，默认提供 slide-up、slide-down、slide-right，默认为 slide-up
     */
    popupTransition: PropTypes.string,
    /**
     * mask层的动画，默认为fade
     */
    maskTransition: PropTypes.string,
    /**
     * 点击遮罩层是否关闭
     */
    maskCloseable: PropTypes.bool,
    /**
     * 关闭事件回调
     */
    onCancel: PropTypes.func,
    prefixCls: PropTypes.string,
  }

  static defaultProps = {
    prefixCls: 'Yep-popup',
    show: false,
    popupTransition: 'slide-up',
    maskTransition: 'fade',
    maskCloseable: true,
    onCancel: () => {
    },
  }

  constructor() {
    super();
    this.onMaskClick = this.onMaskClick.bind(this)
  }

  onMaskClick(e) {
    const {maskCloseable, onCancel} = this.props;
    if (e.target === e.currentTarget && maskCloseable && onCancel) {
      onCancel(e);
    }
  }

  render() {
    const {show, popupTransition, maskTransition, prefixCls, className, style, children} = this.props;

    const cls = classNames(prefixCls, className);

    return (
      <div>
        <CSSTransition
          in={show}
          timeout={300}
          classNames={maskTransition}
          unmountOnExit
        >
          <Mask onClick={this.onMaskClick}/>
        </CSSTransition>

        <CSSTransition
          in={show}
          timeout={300}
          classNames={popupTransition}
          unmountOnExit
        >
          <div className={cls} style={style} onClick={this.onMaskClick}>
            {children}
          </div>
        </CSSTransition>
      </div>

    )
  }


}
