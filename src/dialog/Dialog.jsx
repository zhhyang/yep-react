import React, {PureComponent} from 'react'
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
  };

  static defaultProps = {
    prefixCls: 'Yep-dialog',
    style: {},
    bodyStyle: {},
    show: false,
    maskCloseable: true,
    onClose: () => {
    },
  };

  constructor(props) {
    super(props)
    this.renderHeader = this.renderHeader.bind(this)
    this.renderBody = this.renderBody.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
  }

  renderHeader() {
    const {prefixCls, title} = this.props;
    return (
      <div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-title`}>
          {title}
        </div>
      </div>
    )
  }

  renderBody() {
    const {prefixCls, bodyStyle, children} = this.props;
    return (
      <div className={`${prefixCls}-body`} style={bodyStyle}>
        {children}
      </div>
    )
  }

  renderFooter() {
    const {prefixCls, footer} = this.props;
    return (
      <div className={`${prefixCls}-footer`}>
        {
          footer
        }
      </div>
    )
  }

  render() {
    const {prefixCls, className, style, title,} = this.props;

    const cls = classNames(prefixCls, className, `${prefixCls}-transparent`);

    return (
      <CSSTransition
        in={true}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div>
          <Mask/>
          <div className={`${prefixCls}-wrap`}>
            <div className={cls} style={style}>
              <div className={`${prefixCls}-content`}>
                {
                  title && this.renderHeader()
                }
                {
                  this.renderBody()
                }
                {
                  this.renderFooter()
                }
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

