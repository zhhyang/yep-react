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
    show: PropTypes.bool,
    popupTransition: PropTypes.string,
    maskTransition: PropTypes.string,
    maskCloseable: PropTypes.bool,
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
