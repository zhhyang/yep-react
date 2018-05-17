import React, {PureComponent} from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {CSSTransition} from 'react-transition-group';
import Mask from '../mask';

export default class Dialog extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    footer: PropTypes.node,
    style: PropTypes.object,
    bodyStyle: PropTypes.object,
    onClose: PropTypes.func,
    show: PropTypes.bool,
    maskCloseable: PropTypes.bool,
    dialogTransition: PropTypes.string,
    maskTransition: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'Yep-dialog',
    style: {},
    bodyStyle: {},
    show: false,
    maskCloseable: false,
    maskTransition: 'fade',
    dialogTransition: 'zoom',
    onClose: () => {},
  };

  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.close = this.close.bind(this);
    this.onMaskClick = this.onMaskClick.bind(this);
  }

  close(e) {
    const {onClose} = this.props;
    if (onClose) {
      onClose(e);
    }
  }

  onMaskClick(e) {
    const {maskCloseable} = this.props;
    if (e.target === e.currentTarget && maskCloseable) {
      this.close(e);
    }
  }

  renderHeader() {
    const {prefixCls, title} = this.props;
    return (
      <div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-title`}>{title}</div>
      </div>
    );
  }

  renderBody() {
    const {prefixCls, bodyStyle, children} = this.props;
    return (
      <div className={`${prefixCls}-body`} style={bodyStyle}>
        {children}
      </div>
    );
  }

  renderFooter() {
    const {prefixCls, footer} = this.props;
    return <div className={`${prefixCls}-footer`}>{footer}</div>;
  }

  render() {
    const {prefixCls, className, style, title, show, maskTransition, dialogTransition} = this.props;

    const cls = classNames(prefixCls, className, `${prefixCls}-transparent`);

    return createPortal(
      <div>
        <CSSTransition in={show} timeout={300} classNames={maskTransition} unmountOnExit>
          <Mask onClick={this.onMaskClick} />
        </CSSTransition>
        <CSSTransition in={show} timeout={300} classNames={dialogTransition} unmountOnExit>
          <div className={`${prefixCls}-wrap`} onClick={this.onMaskClick}>
            <div className={cls} style={style}>
              <div className={`${prefixCls}-content`}>
                {title && this.renderHeader()}
                {this.renderBody()}
                {this.renderFooter()}
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>,
      document.body
    );
  }
}
