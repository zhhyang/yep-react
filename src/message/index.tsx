import * as React from 'react';
import classNames from 'classnames';
import RemindOutlined from '@jdcfe/icons-react/RemindOutlined';
import CloseOutlined from '@jdcfe/icons-react/CloseOutlined';
export interface MessageProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 通知显示时间，-1代表一直存在，需要用户手动关闭
   * 单位毫秒
   */
  duration: number;

  /**
   * 通知类型，普通通知、警告通知、错误通知
   */
  type?: 'info' | 'warn' | 'error';

  /**
   * 通知位置：固定顶部、固定底部、在通知栏所处DOM位置不变
   */
  position?: 'fix-top' | 'fix-bottom' | 'in-place';

  icon?: boolean;
  closeable?: boolean;
}
export default class Message extends React.PureComponent<MessageProps, any> {
  timer: any;
  static defaultProps = {
    children: null,
    prefixCls: 'Yep-message',
    className: '',
    style: {},
    duration: -1,
    type: 'info',
    position: 'in-place',
    icon: true,
    closeable: false,
  };

  constructor(props: MessageProps) {
    super(props);
    this.state = {
      isShow: true,
    };
    this.closeMessage = this.closeMessage.bind(this);
    this.showMessage = this.showMessage.bind(this);
  }

  componentDidMount() {
    const {duration} = this.props;

    if (duration > 0) {
      this.timer = setTimeout(() => {
        this.closeMessage();
      }, duration);
    }
  }

  closeMessage() {
    // 清空定时器
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.setState({
      isShow: false,
    });
  }

  showMessage() {
    // 清空定时器
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.setState({
      isShow: true,
    });
  }

  render() {
    if (!this.state.isShow) return null;

    const {prefixCls, className, style, type, position, icon, closeable, children} = this.props;

    const wrapperCls = classNames(prefixCls, position, className);
    const box = classNames('box', `box-${type}`);

    // icon分为info,warn,error三级
    return (
      <div className={wrapperCls} style={style}>
        <div className={box}>
          {icon && <RemindOutlined className={`${prefixCls}-icon-remind`} />}
          <div className="message-text">{children}</div>
          {closeable && <CloseOutlined onClick={this.closeMessage} className={`${prefixCls}-icon-close`} />}
        </div>
      </div>
    );
  }
}
