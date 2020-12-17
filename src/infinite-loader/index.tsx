import * as React from 'react';
import {throttle} from 'lodash';
import {InfiniteLoaderPropTypes} from './types';
import noop from '../_utils/noop';
class InfiniteLoader extends React.PureComponent<InfiniteLoaderPropTypes, any> {
  static defaultProps = {
    style: {},
    className: 'Yep-infinite-loader',
    onScroll: noop,
  };

  throttledOnScrollListener: any;
  _scrollableNode: any;
  el: any;
  _infScroll: any;
  constructor(props: InfiniteLoaderPropTypes) {
    super(props);
    this.state = {
      showLoader: false,
      lastScrollTop: 0,
      actionTriggered: false,
    };
    // will be populated in componentDidMount
    // based on the height of the pull down element

    this.onScrollListener = this.onScrollListener.bind(this);
    this.throttledOnScrollListener = throttle(this.onScrollListener, 150).bind(this);
    this.getScrollableTarget = this.getScrollableTarget.bind(this);
  }

  componentDidMount() {
    this._scrollableNode = this.getScrollableTarget();
    this.el = this.props.height ? this._infScroll : this._scrollableNode || window;
    this.el.addEventListener('scroll', this.throttledOnScrollListener);

    if (typeof this.props.initialScrollY === 'number' && this.el.scrollHeight > this.props.initialScrollY) {
      //this.el.scrollTo(0, this.props.initialScrollY) scrollTo is not a function in andriod webview
      if (typeof this.el.scrollTo === 'function') {
        this.el.scrollTo(0, this.props.initialScrollY);
      } else {
        this.el.scrollTop = this.props.initialScrollY;
      }
    }
  }

  componentWillUnmount() {
    this.el.removeEventListener('scroll', this.throttledOnScrollListener);
  }

  componentWillReceiveProps(props: InfiniteLoaderPropTypes) {
    // do nothing when dataLength is unchanged
    if (this.props.dataLength === props.dataLength) return;

    // update state when new data was sent in
    this.setState({
      showLoader: false,
      actionTriggered: false,
    });
  }

  getScrollableTarget() {
    if (this.props.scrollableTarget instanceof HTMLElement) return this.props.scrollableTarget;
    if (typeof this.props.scrollableTarget === 'string') {
      return document.getElementById(this.props.scrollableTarget);
    }
    if (this.props.scrollableTarget === null) {
      console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
      `);
    }
    return null;
  }

  isElementAtBottom(target: any, scrollThreshold = 0.8) {
    const clientHeight = target.clientHeight;

    return target.scrollTop + clientHeight >= scrollThreshold * target.scrollHeight;
  }

  onScrollListener(event: React.TouchEvent<HTMLDivElement>) {
    if (typeof this.props.onScroll === 'function') {
      // Execute this callback in next tick so that it does not affect the
      // functionality of the library.
      setTimeout(() => this.props.onScroll(event), 0);
    }

    const target =
      this.props.height || this._scrollableNode
        ? event.target
        : document.documentElement.scrollTop
        ? document.documentElement
        : (document.body as any);

    // return immediately if the action has already been triggered,
    // prevents multiple triggers.
    if (this.state.actionTriggered) return;

    const atBottom = this.isElementAtBottom(target, this.props.scrollThreshold);

    // call the `next` function in the props to trigger the next data fetch
    if (atBottom && this.props.hasMore) {
      this.setState({actionTriggered: true, showLoader: true});
      this.props.loadMore();
    }
    this.setState({lastScrollTop: target.scrollTop});
  }

  render() {
    const {className, style, hasChildren, children, height, hasMore, endMessage, loader} = this.props;
    const componentStyle = {
      height: height || 'auto',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      ...style,
    } as React.CSSProperties;
    const hasChild = hasChildren || !!(children && React.Children.count(children));
    return (
      <div className={className} ref={infScroll => (this._infScroll = infScroll)} style={componentStyle}>
        {children}
        {!this.state.showLoader && !hasChild && hasMore && loader}
        {this.state.showLoader && hasMore && loader}
        {!hasMore && endMessage}
      </div>
    );
  }
}

export default InfiniteLoader;
