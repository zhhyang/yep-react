import * as React from 'react';
import classNames from 'classnames';
import noop from '../_utils/noop';
import confirm from './confirm';
import Popup from '../popup';

export interface DialogProps {
  prefixCls?: string;
  className?: string;
  title: string;
  footer: React.ReactNode;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  onClose?: (e: any) => void;
  show?: boolean;
  maskCloseable?: boolean;
  dialogTransition: string;
  maskTransition: string;
}

export default class Dialog extends React.PureComponent<DialogProps, any> {
  static confirm = confirm;
  static defaultProps = {
    prefixCls: 'Yep-dialog',
    style: {},
    bodyStyle: {},
    show: false,
    maskCloseable: false,
    maskTransition: 'fade',
    dialogTransition: 'zoom',
    onClose: noop,
  };

  constructor(props: DialogProps) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.close = this.close.bind(this);
    this.onMaskClick = this.onMaskClick.bind(this);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    this.setState({
      show: this.props.show,
    });
  }

  componentWillReceiveProps(nextProps: any) {
    this.setState({
      show: nextProps.show,
    });
  }

  close(e: any) {
    const {onClose} = this.props;
    if (onClose) {
      onClose(e);
    }
  }

  onMaskClick(e: any) {
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
    const {prefixCls, className, style, title, maskTransition, dialogTransition} = this.props;

    const cls = classNames(prefixCls, className, `${prefixCls}-transparent`);

    return (
      <Popup
        show={this.state.show}
        maskTransition={maskTransition}
        popupTransition={dialogTransition}
        maskCloseable={false}
        usePortal={true}
      >
        <div className={`${prefixCls}-wrap`} onClick={this.onMaskClick}>
          <div className={cls} style={style}>
            <div className={`${prefixCls}-content`}>
              {title && this.renderHeader()}
              {this.renderBody()}
              {this.renderFooter()}
            </div>
          </div>
        </div>
      </Popup>
    );
  }
}
