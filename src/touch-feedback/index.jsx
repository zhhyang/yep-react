import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * 给组件添加Touch或Mouse下的active状态
 */
export default class TouchFeedback extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    activeClassName: PropTypes.string,
    activeStyle: PropTypes.object,
  };

  static defaultProps = {
    disabled: false,
  };

  constructor() {
    super();
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

  triggerEvent(type, isActive, ev) {
    const eventType = `on${type}`;
    const {children} = this.props;

    if (children.props[eventType]) {
      children.props[eventType](ev);
    }
    if (isActive !== this.state.active) {
      this.setState({
        active: isActive,
      });
    }
  }

  onTouchStart(e) {
    this.triggerEvent('TouchStart', true, e);
  }

  onTouchMove(e) {
    this.triggerEvent('TouchMove', false, e);
  }

  onTouchEnd(e) {
    this.triggerEvent('TouchEnd', false, e);
  }

  onTouchCancel(e) {
    this.triggerEvent('TouchCancel', false, e);
  }

  onMouseDown(e) {
    // pc simulate mobile
    this.triggerEvent('MouseDown', true, e);
  }

  onMouseUp(e) {
    this.triggerEvent('MouseUp', false, e);
  }

  onMouseLeave(e) {
    this.triggerEvent('MouseLeave', false, e);
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
