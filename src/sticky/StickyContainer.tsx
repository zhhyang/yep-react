import * as React from 'react';

import * as PropTypes from 'prop-types';
// @ts-ignore
import raf from 'raf';

export interface StickyContainerProps {

}

export default class StickyContainer extends React.PureComponent<StickyContainerProps,any> {

  static defaultProps = {};

  static childContextTypes = {
    subscribe: PropTypes.func,
    unsubscribe: PropTypes.func,
    getParent: PropTypes.func,
  };

  getChildContext() {
    return {
      subscribe: this.subscribe,
      unsubscribe: this.unsubscribe,
      getParent: this.getParent,
    };
  }
  node:HTMLDivElement;
  subscribers = []
  events = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load']
  framePending:boolean;
  constructor(props:StickyContainerProps) {
    super(props);
    this.createRef = this.createRef.bind(this);
    this.getParent = this.getParent.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.notifySubscribers = this.notifySubscribers.bind(this);
  }

  subscribe(handler:any) {
    this.subscribers = this.subscribers.concat(handler);
  }

  unsubscribe(handler:any) {
    this.subscribers = this.subscribers.filter(current => current !== handler);
  }

  notifySubscribers(evt:any) {
    if (!this.framePending) {
      const {currentTarget} = evt;
      raf(() => {
        this.framePending = false;
        const {top, bottom} = this.node.getBoundingClientRect();
        this.subscribers.forEach((handler:any) =>
          handler({
            distanceFromTop: top,
            distanceFromBottom: bottom,
            eventSource: currentTarget === window ? document.body : this.node,
          })
        );
      });
      this.framePending = true;
    }
  }

  createRef(node:HTMLDivElement) {
    this.node = node;
  }

  getParent() {
    return this.node;
  }

  componentDidMount() {
    this.events.forEach(event => window.addEventListener(event, this.notifySubscribers));
  }

  componentWillUnmount() {
    this.events.forEach(event => window.removeEventListener(event, this.notifySubscribers));
  }

  render() {
    return (
      <div
        {...this.props}
        ref={this.createRef}
        onScroll={this.notifySubscribers}
        onTouchStart={this.notifySubscribers}
        onTouchMove={this.notifySubscribers}
        onTouchEnd={this.notifySubscribers}
      />
    );
  }
}
