import * as React from 'react';
import classNames from 'classnames';
import {CSSTransition} from 'react-transition-group';
import Mask from '../mask';

export interface PopupProps {
  /**
   * 是否显示
   */
  show?: boolean;
  /**
   * popup弹出动画，默认提供 slide-up、slide-down、slide-right，默认为 slide-up
   */
  popupTransition: string;
  /**
   * mask层的动画，默认为fade
   */
  maskTransition: string;
  /**
   * 点击遮罩层是否关闭
   */
  maskCloseable?: boolean;
  /**
   * 关闭事件回调
   */
  onCancel?: (e: React.TouchEvent<HTMLDivElement>) => void;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default class Popup extends React.PureComponent<PopupProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-popup',
    style: {},
    show: false,
    popupTransition: 'slide-up',
    maskTransition: 'fade',
    maskCloseable: true,
    onCancel: () => {},
  };

  onMaskClick = (e:any) => {
    const {maskCloseable, onCancel} = this.props;
    if (e.target === e.currentTarget && maskCloseable && onCancel) {
      onCancel(e);
    }
  };

  render() {
    const {show, popupTransition, maskTransition, prefixCls, className, style, children} = this.props;

    const cls = classNames(prefixCls, className);

    return (
      <div>
        <CSSTransition in={show} timeout={300} classNames={maskTransition} unmountOnExit={true}>
          <Mask onClick={this.onMaskClick} />
        </CSSTransition>

        <CSSTransition in={show} timeout={300} classNames={popupTransition} unmountOnExit={true}>
          <div className={cls} style={style} onClick={this.onMaskClick}>
            {children}
          </div>
        </CSSTransition>
      </div>
    );
  }
}
