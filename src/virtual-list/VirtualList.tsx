import * as React from 'react';
import classNames from 'classnames';
import {findDOMNode} from 'react-dom';
import * as events from '../_utils/events';

const NOOP = () => {};
const MAX_SYNC_UPDATES = 100;

const isEqualSubset = (parameters: {a: any; b: any}) => {
  let {a, b} = parameters;
  for (const key in b) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};

export interface VirtualListProps {
  next: any;
  prefixCls?: string;

  className: string;
  /**
   * 渲染的子节点
   */
  children: any;
  /**
   * 最小加载数量
   */
  minSize: number;
  /**
   * 一屏数量
   */
  pageSize: number;
  /**
   * 父渲染函数，默认为 (items, ref) => <ul ref={ref}>{items}</ul>
   */
  itemsRenderer: (items: any, ref: any) => React.ReactNode;
  /**
   * 缓冲区高度
   */
  threshold: number;
  /**
   * 获取item高度的函数
   */
  itemSizeGetter: () => number;
  /**
   * 设置跳转位置，需要设置 itemSizeGetter 才能生效, 不设置认为元素等高并取第一个元素高度作为默认高
   */
  jumpIndex?: number;
}
/** VirtualList */
export default class VirtualList extends React.Component<VirtualListProps> {
  static displayName = 'VirtualList';

  static defaultProps = {
    prefixCls: 'Yep',
    itemsRenderer: (parameters: {items: any; ref: any}) => {
      const {items, ref} = parameters;
      console.log(items);
      return <ul ref={ref}>{items}</ul>;
    },
    minSize: 1,
    pageSize: 10,
    jumpIndex: 0,
    threshold: 100,
  };
  private cache: {};
  private cachedScroll: number;
  private unstable: boolean;
  private updateCounter: number;
  private scrollParent: any;
  private updateCounterTimeoutId: number;
  private el: any;
  private items: any;
  private defaultItemHeight: number;

  constructor(props: VirtualListProps) {
    super(props);
    const {jumpIndex} = props;
    const {from, size} = this.constrain(jumpIndex, 0, props);
    this.state = {from, size};
    this.cache = {};
    this.scrollTo = this.scrollTo.bind(this);
    this.cachedScroll = 0;
    this.unstable = false;
    this.updateCounter = 0;
  }

  componentDidMount() {
    const {jumpIndex} = this.props;

    this.updateFrameAndClearCache = this.updateFrameAndClearCache.bind(this);

    events.on(window, 'resize', this.updateFrameAndClearCache, false);

    this.updateFrame({cb: this.scrollTo.bind(this, jumpIndex)});
  }

  componentWillReceiveProps = (parameters: VirtualListProps) => {
    let next = parameters.next;
    const {from, size}: Readonly<any> = this.state;

    const oldIndex = this.props.jumpIndex;
    const newIndex = next.jumpIndex;

    if (oldIndex !== newIndex) {
      this.updateFrame({cb: this.scrollTo.bind(this, newIndex)});
    }

    this.maybeSetState({b: this.constrain(from, size, next), cb: NOOP});
  };

  componentDidUpdate() {
    // If the list has reached an unstable state, prevent an infinite loop.
    if (this.unstable) {
      return;
    }

    if (++this.updateCounter > MAX_SYNC_UPDATES) {
      this.unstable = true;
    }

    if (!this.updateCounterTimeoutId) {
      this.updateCounterTimeoutId = window.setTimeout(() => {
        this.updateCounter = 0;
        delete this.updateCounterTimeoutId;
      }, 0);
    }

    this.updateFrame({cb: NOOP});
  }

  componentWillUnmount() {
    events.off(window, 'resize', this.updateFrameAndClearCache, false);

    events.off(this.scrollParent, 'scroll', this.updateFrameAndClearCache, false);
    events.off(this.scrollParent, 'mousewheel', NOOP, false);
  }

  maybeSetState(parameters: {b: any; cb: any}) {
    let {b, cb} = parameters;
    if (isEqualSubset({a: this.state, b: b})) {
      return cb();
    }

    this.setState(b, cb);
  }

  getOffset(parameters: {el: any}) {
    let el = parameters.el;
    let offset = el.clientLeft || 0;
    do {
      offset += el.offsetTop || 0;
      el = el.offsetParent;
    } while (el);
    return offset;
  }

  getEl() {
    return this.el || this.items || {};
  }

  getScrollParent() {
    let el = this.getEl();
    el = el.parentElement;

    switch (window.getComputedStyle(el).overflowY) {
      case 'auto':
      case 'scroll':
      case 'overlay':
      case 'visible':
        return el;
    }

    return window;
  }

  getScroll() {
    // Cache scroll position as this causes a forced synchronous layout.
    // if (typeof this.cachedScroll === 'number') {
    //     return this.cachedScroll;
    // }
    const {scrollParent} = this;
    const scrollKey = 'scrollTop';
    const actual =
      scrollParent === window
        ? // Firefox always returns document.body[scrollKey] as 0 and Chrome/Safari
          // always return document.documentElement[scrollKey] as 0, so take
          // whichever has a value.
        document.body[scrollKey] || (document.documentElement && document.documentElement[scrollKey])
        : scrollParent && scrollParent[scrollKey];
    const max = this.getScrollSize() - this.getViewportSize();

    const scroll = Math.max(0, Math.min(actual, max));
    const el = this.getEl();
    this.cachedScroll = this.getOffset({el: scrollParent}) + scroll - this.getOffset({el: el});

    return this.cachedScroll;
  }

  setScroll(parameters: {offset: any}) {
    let offset = parameters.offset;
    const {scrollParent} = this;
    let win: any;
    win = window;
    offset += this.getOffset({el: this.getEl()});
    if (scrollParent === win) {
      return win.scrollTo(0, offset);
    }

    offset -= this.getOffset({el: this.scrollParent});
    scrollParent.scrollTop = offset;
  }

  getViewportSize() {
    const {scrollParent} = this;
    return scrollParent === window ? window.innerHeight : scrollParent.clientHeight;
  }

  getScrollSize() {
    const {scrollParent} = this;
    const {body, documentElement} = document;
    const key = 'scrollHeight';
    return scrollParent === window
      ? Math.max(body[key], documentElement ? documentElement[key] : 0)
      : scrollParent[key];
  }

  getStartAndEnd(threshold = this.props.threshold) {
    const scroll = this.getScroll();

    const trueScroll = scroll;
    const start = Math.max(0, trueScroll - threshold);
    const end = trueScroll + this.getViewportSize() + threshold;

    return {start, end};
  }

  // Called by 'scroll' and 'resize' events, clears scroll position cache.
  updateFrameAndClearCache(parameters: {cb: any}) {
    let cb = parameters.cb;
    this.cachedScroll = 0;
    return this.updateFrame({cb: cb});
  }

  updateFrame(parameters: {cb: any}) {
    let cb = parameters.cb;
    this.updateScrollParent();

    if (typeof cb !== 'function') {
      cb = NOOP;
    }

    return this.updateVariableFrame({cb: cb});
  }

  updateScrollParent() {
    const prev = this.scrollParent;
    this.scrollParent = this.getScrollParent();

    if (prev === this.scrollParent) {
      return;
    }
    if (prev) {
      events.off(prev, 'scroll', this.updateFrameAndClearCache, false);
      events.off(prev, 'mousewheel', NOOP, false);
    }

    events.on(this.scrollParent, 'scroll', this.updateFrameAndClearCache, false);
    events.on(this.scrollParent, 'mousewheel', NOOP, false);

    // You have to attach mousewheel listener to the scrollable element.
    // Just an empty listener. After that onscroll events will be fired synchronously.
  }

  updateVariableFrame(parameters: {cb: any}) {
    let cb = parameters.cb;
    if (!this.props.itemSizeGetter) {
      this.cacheSizes();
    }

    const {start, end} = this.getStartAndEnd();
    const {pageSize, children} = this.props;
    const length = children.length;
    let space = 0;
    let from = 0;
    let size = 0;
    const maxFrom = length - 1;

    while (from < maxFrom) {
      const itemSize = this.getSizeOf({index: from});
      if (itemSize === null || itemSize === undefined || space + itemSize > start) {
        break;
      }
      space += itemSize;
      ++from;
    }

    const maxSize = length - from;

    while (size < maxSize && space < end) {
      const itemSize = this.getSizeOf({index: from + size});
      if (itemSize === null || itemSize === undefined) {
        size = Math.min(size + pageSize, maxSize);
        break;
      }
      space += itemSize;
      ++size;
    }

    this.maybeSetState({b: {from, size}, cb: cb});
  }

  getSpaceBefore(parameters: {index: any; cache?: any}) {
    let {index, cache = {}} = parameters;
    if (!index) {
      return 0;
    }
    if (cache[index] !== null && cache[index] !== undefined) {
      return cache[index] || 0;
    }

    // Find the closest space to index there is a cached value for.
    let from = index;
    while (from > 0 && (cache[from] === null || cache[from] === undefined)) {
      from--;
    }

    // Finally, accumulate sizes of items from - index.
    let space = cache[from] || 0;
    for (let i = from; i < index; ++i) {
      cache[i] = space;
      const itemSize = this.getSizeOf({index: i});
      if (itemSize === null || itemSize === undefined) {
        break;
      }
      space += itemSize;
    }

    cache[index] = space;

    return cache[index] || 0;
  }

  cacheSizes() {
    const {cache}: Readonly<any> = this;
    const {from}: Readonly<any> = this.state;
    const {children, props = {}} = this.items;
    const itemEls = children || props.children || [];
    for (let i = 0, l = itemEls.length; i < l; ++i) {
      const ulRef:any = findDOMNode(this.items);
      const height = ulRef && ulRef.children[i].offsetHeight;
      if (height > 0) {
        cache[from + i] = height;
      }
    }
  }

  getSizeOf(parameters: {index: any}) {
    let index = parameters.index;
    const {cache}: Readonly<any> = this;
    const {itemSizeGetter, jumpIndex}: Readonly<any> = this.props;

    // Try the cache.
    if (index in cache) {
      return cache[index];
    }
    if (itemSizeGetter) {
      return itemSizeGetter(index);
    }

    const height = (Object as any).values(this.cache).pop();
    if (!this.defaultItemHeight && jumpIndex > -1 && height) {
      this.defaultItemHeight = height;
    }

    if (this.defaultItemHeight) {
      return this.defaultItemHeight;
    }
  }

  constrain = (from: any, size: any, {children, minSize}: any) => {
    const length = children && children.length;
    size = Math.max(size, minSize);
    if (size > length) {
      size = length;
    }
    from = from ? Math.max(Math.min(from, length - size), 0) : 0;

    return {from, size};
  };

  scrollTo(index:any) {
    this.setScroll({offset: this.getSpaceBefore({index: index})});
  }

  renderMenuItems() {
    const {children, itemsRenderer} = this.props;
    const {from, size}: Readonly<any> = this.state;
    const items = [];
    for (let i = 0; i < size; ++i) {
      items.push(children[from + i]);
    }
    console.log(items);
    return itemsRenderer(items, (c:any) => {
      console.log(c)
      this.items = c;
      return this.items;
    });
  }

  render() {
    const {children = [], prefixCls, className} = this.props;
    const length = React.Children.count(children);
    const {from}: Readonly<any> = this.state;
    const items = this.renderMenuItems();

    let style = {height: 'auto', position: 'relative' as 'relative'};
    const cache = {};

    const size = this.getSpaceBefore({index: length, cache: cache});

    if (size) {
      style.height = size;
    }
    const offset = this.getSpaceBefore({index: from, cache: cache});
    const transform = `translate(0px, ${offset}px)`;
    const listStyle = {
      msTransform: transform,
      WebkitTransform: transform,
      transform,
    };

    const cls = classNames({
      [`${prefixCls}-virtual-list-wrapper`]: true,
      [className]: !!className,
    });

    return (
      <div
        className={cls}
        style={style}
        ref={c => {
          this.el = c;
          return this.el;
        }}
      >
        <div style={listStyle}>{items}</div>
      </div>
    );
  }
}
