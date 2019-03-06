import * as React from 'react';
import classNames from 'classnames';

export interface TouchFeedbackProps {
  disabled?: boolean;
  activeClassName?: string;
  activeStyle?: React.CSSProperties;
  children:any
}

/**
 * 给组件添加Touch或Mouse下的active状态
 */
export default class TouchFeedback extends React.PureComponent<TouchFeedbackProps, any> {
  static defaultProps = {
    disabled: false,
  };

  constructor(props: TouchFeedbackProps) {
    super(props);
    this.triggerEvent = this.triggerEvent.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTouchCancel = this.onTouchCancel.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      active: false,
    };
  }

  componentDidUpdate() {
    if (this.props.disabled && this.state.active) {
      this.setState({
        active: false,
      });
    }
  }

  triggerEvent(parameters: {type: any, isActive: any, ev: any}) {
    let {type, isActive, ev} = parameters;
    const eventType = `on${type}`;
    const {children} = this.props;

    if (children && children.props[eventType]) {
      children.props[eventType](ev);
    }
    if (isActive !== this.state.active) {
      this.setState({
        active: isActive,
      });
    }
  }

  onTouchStart(parameters: {e: any}) {
    let e = parameters.e;
    this.triggerEvent({type: 'TouchStart', isActive: true, ev: e});
  }

  onTouchMove(parameters: {e: any}) {
    let e = parameters.e;
    this.triggerEvent({type: 'TouchMove', isActive: false, ev: e});
  }

  onTouchEnd(parameters: {e: any}) {
    let e = parameters.e;
    this.triggerEvent({type: 'TouchEnd', isActive: false, ev: e});
  }

  onTouchCancel(parameters: {e: any}) {
    let e = parameters.e;
    this.triggerEvent({type: 'TouchCancel', isActive: false, ev: e});
  }

  onMouseDown(parameters: {e: any}) {
    let e = parameters.e;
    // pc simulate mobile
    this.triggerEvent({type: 'MouseDown', isActive: true, ev: e});
  }

  onMouseUp(parameters: {e: any}) {
    let e = parameters.e;
    this.triggerEvent({type: 'MouseUp', isActive: false, ev: e});
  }

  onMouseLeave(parameters: {e: any}) {
    let e = parameters.e;
    this.triggerEvent({type: 'MouseLeave', isActive: false, ev: e});
  }

  render() {
    const {children, disabled, activeClassName, activeStyle} = this.props;

    const events = disabled
      ? undefined
      : {
          onTouchStart: this.onTouchStart,
          onTouchMove: this.onTouchMove,
          onTouchEnd: this.onTouchEnd,
          onTouchCancel: this.onTouchCancel,
          onMouseDown: this.onMouseDown,
          onMouseUp: this.onMouseUp,
          onMouseLeave: this.onMouseLeave,
        };

    const child = React.Children.only(children);

    if (!disabled && this.state.active) {
      let {style, className} = child.props;

      if (activeStyle !== false) {
        if (activeStyle) {
          style = {...style, ...activeStyle};
        }
        className = classNames(className, activeClassName);
      }

      return React.cloneElement(child, {
        className,
        style,
        ...events,
      });
    }

    return React.cloneElement(child, events);
  }
}
