import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {CSSTransition} from "react-transition-group";
import classNames from 'classnames';
import Icon from "../icon";

export default class Notification extends PureComponent {


  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.string,
    message: PropTypes.string.isRequired,
    //show:PropTypes.bool,
    bottom: PropTypes.bool,
    duration: PropTypes.number,
  };

  static defaultProps = {
    prefixCls: 'Yep-toast',
    style: {},
    //show:false,
    bottom: false,
    duration: 1.5,
  };

  constructor(props) {
    super(props)
    this.close = this.close.bind(this);
    this.startCloseTimer = this.startCloseTimer.bind(this);
    this.clearCloseTimer = this.clearCloseTimer.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      show: true,
    }
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
      this.closeTimer = setTimeout(() => {
        this.close();
      }, duration * 1000)
    }
  }

  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  componentDidMount() {
    this.startCloseTimer();
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  render() {

    const {className, prefixCls, style, icon, message, bottom} = this.props;
    const cls = classNames(prefixCls, className, {
      'bottom': bottom,
    });
    return (
      <CSSTransition
        in={this.state.show}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className={cls} style={style}>
          {
            icon && <Icon type={icon} style={{display:'block'}}/>
          }
          <span className={`${prefixCls}-message`}>{message}</span>
        </div>
      </CSSTransition>
    )
  }
}

Notification.newInstance = (properties,callback) => {

  const div = document.createElement('div');
  document.body.appendChild(div)

  let called = false;
  function ref(instance) {
    if (called){
      return;
    }
    called = true;

    callback({
      component:instance,
      destroy(){
        ReactDOM.unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
      }
    })
  }

  ReactDOM.render(<Notification {...properties} ref={ref} />, div)
}

