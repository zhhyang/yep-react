import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import classNames from 'classnames';
import Mask from '../mask';
export interface NotificationProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  icon?: string;
  message: string | React.ReactNode;
  bottom?: boolean;
  duration?: number;
  onClose: () => void;
  className?: string;
  mask?: boolean;
}

interface State {
  show: boolean;
}

export default class Notification extends React.PureComponent<NotificationProps, State> {
  static defaultProps = {
    prefixCls: 'Yep-toast',
    style: {},
    //show:false,
    bottom: false,
    duration: 1.5,
    mask: false,
  };
  private closeTimer: number;
  static newInstance: (properties: NotificationProps, callback: any) => void;
  constructor(props: NotificationProps) {
    super(props);
    this.close = this.close.bind(this);
    this.startCloseTimer = this.startCloseTimer.bind(this);
    this.clearCloseTimer = this.clearCloseTimer.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      show: true,
    };
  }

  close() {
    this.setState({
      show: false,
    });
    this.clearCloseTimer();
    this.props.onClose();
  }

  startCloseTimer() {
    const {duration} = this.props;
    if (duration) {
      this.closeTimer = window.setTimeout(() => {
        this.close();
      }, duration * 1000);
    }
  }

  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = -1;
    }
  }

  componentDidMount() {
    this.startCloseTimer();
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  render() {
    const {className, prefixCls, style, icon, message, bottom, mask} = this.props;
    const {show} = this.state;
    const cls = classNames(prefixCls, className, `${prefixCls}-mask`, {
      [`${prefixCls}-bottom`]: bottom,
    });
    return (
      <>
        {mask && (
          <CSSTransition in={show} timeout={300} classNames={'fade'} unmountOnExit={true}>
            <Mask transparent={true} />
          </CSSTransition>
        )}
        <CSSTransition in={show} timeout={300} classNames="fade" unmountOnExit={true}>
          <div className={cls} style={style}>
            <div className={`${prefixCls}-notice`}>
              {icon && <div className={`${prefixCls}-notice-icon`}>{icon}</div>}
              <div className={`${prefixCls}-notice-message`}>{message}</div>
            </div>
          </div>
        </CSSTransition>
      </>
    );
  }
}

Notification.newInstance = (properties, callback) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  let called = false;
  function ref(instance: any) {
    if (called) {
      return;
    }
    called = true;

    callback({
      component: instance,
      destroy() {
        ReactDOM.unmountComponentAtNode(div);
        div && div.parentNode && div.parentNode.removeChild(div);
      },
    });
  }

  ReactDOM.render(<Notification {...properties} ref={ref} />, div);
};
