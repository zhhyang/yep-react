import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import klass from './cssClasses';
import Gesture from '@jdcfe/yep-gesture';
import {CarouselProps} from './types';
import noop from '../_utils/noop';

const defaultStatusFormatter = (current: number, total: number) => `${current} / ${total}`;

const CSSTranslate = (position: string, vertical: boolean) => {
  const positionCss = !vertical ? [position, 0, 0] : [0, position, 0];
  const transitionProp = 'translate3d';

  const translatedPosition = '(' + positionCss.join(',') + ')';

  return transitionProp + translatedPosition;
};

class Carousel extends React.Component<CarouselProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-carousel',
    style: {},
    dots: true,
    showPager: false,
    isInfinite: false,
    initPage: 0,
    vertical: false,
    verticalSwipe: 'standard',
    width: '100%',
    autoPlay: false,
    transitionTime: 350,
    distance: 5,
    dynamicHeight: false,
    onClickItem: noop,
    onClickThumb: noop,
    onChange: noop,
    renderPage: defaultStatusFormatter,
    centerMode: false,
    centerSlidePercentage: 80,
    onSwipeStart: () => {},
    onSwipeEnd: () => {},
    onSwipeMove: () => {},
    renderIndicator: (onClickHandler: any, isSelected: boolean, index: number, label: any) => {
      return (
        <li
          className={klass.DOT(isSelected)}
          onClick={onClickHandler}
          onKeyDown={onClickHandler}
          value={index}
          key={index}
          role="button"
          tabIndex={0}
          aria-label={`${label} ${index + 1}`}
        />
      );
    },
    renderItem: (item: any) => {
      return item;
    },
  };

  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      initialized: false,
      selectedItem: props.initPage,
      hasMount: false,
      isMouseEntered: false,
      autoPlay: props.autoPlay,
    };
  }

  carouselWrapperRef: any;
  listRef: any;
  itemsWrapperRef: any;
  itemsRef: any;
  timer: any;

  componentDidMount() {
    if (!this.props.children) {
      return;
    }

    this.setupCarousel();
  }

  componentDidUpdate(prevProps: CarouselProps, prevState: any) {
    if (!prevProps.children && this.props.children && !this.state.initialized) {
      this.setupCarousel();
    }

    if (prevState.swiping && !this.state.swiping) {
      // We stopped swiping, ensure we are heading to the new/current slide and not stuck
      this.resetPosition();
    }

    if (prevProps.initPage !== this.props.initPage || prevProps.centerMode !== this.props.centerMode) {
      this.updateSizes();
      this.moveTo(this.props.initPage);
    }

    if (prevProps.autoPlay !== this.props.autoPlay) {
      if (this.props.autoPlay) {
        this.setupAutoPlay();
      } else {
        this.destroyAutoPlay();
      }

      this.setState({autoPlay: this.props.autoPlay});
    }
  }

  componentWillUnmount() {
    this.destroyCarousel();
  }

  setCarouselWrapperRef = (node: any) => {
    this.carouselWrapperRef = node;
  };

  setListRef = (node: any) => {
    this.listRef = node;
  };

  setItemsWrapperRef = (node: any) => {
    this.itemsWrapperRef = node;
  };

  setItemsRef = (node: any, index: number) => {
    if (!this.itemsRef) {
      this.itemsRef = [];
    }
    this.itemsRef[index] = node;
  };

  setupCarousel() {
    this.bindEvents();

    if (this.state.autoPlay && React.Children.count(this.props.children) > 1) {
      this.setupAutoPlay();
    }

    this.setState({
      initialized: true,
    });

    const initialImage = this.getInitialImage();
    if (initialImage) {
      // if it's a carousel of images, we set the mount state after the first image is loaded
      initialImage.addEventListener('load', this.setMountState);
    } else {
      this.setMountState();
    }
  }

  destroyCarousel() {
    if (this.state.initialized) {
      this.unbindEvents();
      this.destroyAutoPlay();
    }
  }

  setupAutoPlay() {
    this.autoPlay();
  }

  destroyAutoPlay() {
    this.clearAutoPlay();
  }

  bindEvents() {
    // as the widths are calculated, we need to resize
    // the carousel when the window is resized
    window.addEventListener('resize', this.updateSizes);
    // issue #2 - image loading smaller
    window.addEventListener('DOMContentLoaded', this.updateSizes);
  }

  unbindEvents() {
    // removing listeners
    window.removeEventListener('resize', this.updateSizes);
    window.removeEventListener('DOMContentLoaded', this.updateSizes);

    const initialImage = this.getInitialImage();
    if (initialImage) {
      initialImage.removeEventListener('load', this.setMountState);
    }
  }

  autoPlay = () => {
    if (!this.state.autoPlay || React.Children.count(this.props.children) <= 1) {
      return;
    }

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.increment();
      //@ts-ignore
    }, this.props.autoPlay);
  };

  clearAutoPlay = () => {
    if (!this.state.autoPlay) {
      return;
    }

    clearTimeout(this.timer);
  };

  resetAutoPlay = () => {
    this.clearAutoPlay();
    this.autoPlay();
  };
  updateSizes = () => {
    if (!this.state.initialized) {
      return;
    }

    const isHorizontal = !this.props.vertical;
    const firstItem = this.itemsRef[0];
    const itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;

    this.setState((_state: any) => ({
      itemSize: itemSize,
    }));
  };

  setMountState = () => {
    this.setState({hasMount: true});
    this.updateSizes();
  };

  handleClickItem = (index: number, item: any) => {
    if (React.Children.count(this.props.children) === 0) {
      return;
    }

    if (this.state.cancelClick) {
      this.setState({
        cancelClick: false,
      });

      return;
    }

    this.props.onClickItem && this.props.onClickItem(index, item);

    if (index !== this.state.selectedItem) {
      this.setState({
        selectedItem: index,
      });
    }
  };

  handleOnChange = (index: number, item: any) => {
    if (React.Children.count(this.props.children) <= 1) {
      return;
    }

    this.props.onTransitionEnd && this.props.onTransitionEnd(index, item);
    this.props.onChange && this.props.onChange(index, item);
  };

  onSwipeStart = (event: any) => {
    this.setState({
      swiping: true,
    });
    this.props.onSwipeStart(event);
    this.clearAutoPlay();
  };

  onSwipeEnd = (event: any) => {
    this.setState({
      swiping: false,
      cancelClick: false,
    });
    this.props.onSwipeEnd(event);
    this.autoPlay();
  };

  onSwipeMove = (delta: any, event: any) => {
    this.props.onSwipeMove(event);
    const isHorizontal = this.props.vertical === false;
    const childrenLength = React.Children.count(this.props.children);

    const initialBoundry = 0;

    const currentPosition = this.getPosition(this.state.selectedItem);
    const finalBoundry = this.props.isInfinite
      ? this.getPosition(childrenLength - 1) - 100
      : this.getPosition(childrenLength - 1);

    const axisDelta = isHorizontal ? delta.x : delta.y;
    let handledDelta = axisDelta;

    // prevent user from swiping left out of boundaries
    if (currentPosition === initialBoundry && axisDelta > 0) {
      handledDelta = 0;
    }

    // prevent user from swiping right out of boundaries
    if (currentPosition === finalBoundry && axisDelta < 0) {
      handledDelta = 0;
    }

    let position = currentPosition + 100 / (this.state.itemSize / handledDelta);
    if (this.props.isInfinite) {
      // When allowing infinite loop, if we slide left from position 0 we reveal the cloned last slide that appears before it
      // if we slide even further we need to jump to other side so it can continue - and vice versa for the last slide
      if (this.state.selectedItem === 0 && position > -100) {
        position -= childrenLength * 100;
      } else if (this.state.selectedItem === childrenLength - 1 && position < -childrenLength * 100) {
        position += childrenLength * 100;
      }
    }
    //@ts-ignore
    position += '%';
    //@ts-ignore
    this.setPosition(position);

    // allows scroll if the swipe was within the tolerance
    const hasMoved = Math.abs(axisDelta) > this.props.distance;

    if (hasMoved && !this.state.cancelClick) {
      this.setState({
        cancelClick: true,
      });
    }

    return hasMoved;
  };

  getPosition(index: number) {
    if (this.props.isInfinite) {
      // index has to be added by 1 because of the first cloned slide
      ++index;
    }

    if (index === 0) {
      return 0;
    }

    const childrenLength = React.Children.count(this.props.children);
    if (this.props.centerMode && this.props.vertical === false) {
      let currentPosition = -index * this.props.centerSlidePercentage;
      const lastPosition = childrenLength - 1;

      if (index && (index !== lastPosition || this.props.isInfinite)) {
        currentPosition += (100 - this.props.centerSlidePercentage) / 2;
      } else if (index === lastPosition) {
        currentPosition += 100 - this.props.centerSlidePercentage;
      }

      return currentPosition;
    }

    return -index * 100;
  }

  setPosition = (position: string | number, forceReflow: boolean) => {
    const list = ReactDOM.findDOMNode(this.listRef);
    ['WebkitTransform', 'transform'].forEach(prop => {
      //@ts-ignore
      list.style[prop] = CSSTranslate(position, this.props.vertical);
    });
    if (forceReflow) {
      //@ts-ignore
      list.offsetLeft;
    }
  };

  resetPosition = () => {
    const currentPosition = this.getPosition(this.state.selectedItem) + '%';
    //@ts-ignore
    this.setPosition(currentPosition);
  };

  decrement = (positions = 1, fromSwipe = false) => {
    this.moveTo(this.state.selectedItem - (typeof positions === 'number' ? positions : 1), fromSwipe);
  };

  increment = (positions = 1, fromSwipe = false) => {
    this.moveTo(this.state.selectedItem + (typeof positions === 'number' ? positions : 1), fromSwipe);
  };

  moveTo = (position: number, fromSwipe?: boolean) => {
    const lastPosition = React.Children.count(this.props.children) - 1;
    const needClonedSlide = this.props.isInfinite && !fromSwipe && (position < 0 || position > lastPosition);
    const oldPosition = position;

    if (position < 0) {
      position = this.props.isInfinite ? lastPosition : 0;
    }

    if (position > lastPosition) {
      position = this.props.isInfinite ? 0 : lastPosition;
    }

    if (needClonedSlide) {
      // set swiping true would disable transition time, then we set slider to cloned position and force a reflow
      // this is only needed for non-swiping situation
      this.setState(
        {
          swiping: true,
        },
        () => {
          if (oldPosition < 0) {
            if (this.props.centerMode && !this.props.vertical) {
              this.setPosition(
                `-${(lastPosition + 2) * this.props.centerSlidePercentage -
                  (100 - this.props.centerSlidePercentage) / 2}%`,
                true
              );
            } else {
              this.setPosition(`-${(lastPosition + 2) * 100}%`, true);
            }
          } else if (oldPosition > lastPosition) {
            this.setPosition(0, true);
          }
          //@ts-ignore
          this.selectItem({
            selectedItem: position,
            swiping: false,
          });
        }
      );
    } else {
      //@ts-ignore
      this.selectItem({
        // if it's not a slider, we don't need to set position here
        selectedItem: position,
      });
    }

    // don't reset auto play when stop on hover is enabled, doing so will trigger a call to auto play more than once
    // and will result in the interval function not being cleared correctly.
    if (this.state.autoPlay && this.state.isMouseEntered === false) {
      this.resetAutoPlay();
    }
  };

  onSwipeForward = () => {
    this.increment(1, true);
  };

  onSwipeBackwards = () => {
    this.decrement(1, true);
  };

  changeItem = (e: any) => {
    if (!e.key || e.key === 'Enter') {
      const newIndex = e.target.value;
      //@ts-ignore
      this.selectItem({
        selectedItem: newIndex,
      });
    }
  };

  selectItem = (state: any, cb: any) => {
    this.setState(state, cb);
    this.handleOnChange(state.selectedItem, React.Children.toArray(this.props.children)[state.selectedItem]);
  };

  getInitialImage = () => {
    const selectedItem = this.props.initPage;
    const item = this.itemsRef && this.itemsRef[selectedItem];
    const images = item && item.getElementsByTagName('img');
    return images && images[selectedItem];
  };

  getVariableImageHeight = (position: number) => {
    const item = this.itemsRef && this.itemsRef[position];
    const images = item && item.getElementsByTagName('img');
    if (this.state.hasMount && images.length > 0) {
      const image = images[0];

      if (!image.complete) {
        // if the image is still loading, the size won't be available so we trigger a new render after it's done
        const onImageLoad = () => {
          this.forceUpdate();
          image.removeEventListener('load', onImageLoad);
        };

        image.addEventListener('load', onImageLoad);
      }

      const height = image.clientHeight;
      return height > 0 ? height : null;
    }

    return null;
  };

  renderItems(isClone?: boolean) {
    return React.Children.map(this.props.children, (item, index) => {
      const slideProps = {
        ref: (e: any) => this.setItemsRef(e, index),
        key: 'itemKey' + index + (isClone ? 'clone' : ''),
        className: klass.ITEM(true, index === this.state.selectedItem),
        onClick: this.handleClickItem.bind(this, index, item),
      };

      if (this.props.centerMode && !this.props.vertical) {
        //@ts-ignore
        slideProps.style = {
          minWidth: this.props.centerSlidePercentage + '%',
        };
      }

      return <li {...slideProps}>{this.props.renderItem(item, {isSelected: index === this.state.selectedItem})}</li>;
    });
  }

  renderControls() {
    const {dots, dotsClass} = this.props;
    if (!dots) {
      return null;
    }

    return (
      <ul className={classNames('Yep-control-dots', {[`${dotsClass}`]: !!dotsClass})}>
        {React.Children.map(this.props.children, (item: any, index: number) => {
          return this.props.renderIndicator(this.changeItem, index === this.state.selectedItem, index, item);
        })}
      </ul>
    );
  }

  renderStatus() {
    if (!this.props.showPager) {
      return null;
    }

    return (
      <p className={`${this.props.prefixCls}-status`}>
        {this.props.renderPage(this.state.selectedItem + 1, React.Children.count(this.props.children))}
      </p>
    );
  }

  render() {
    if (!this.props.children || React.Children.count(this.props.children) === 0) {
      return null;
    }

    const isHorizontal = !this.props.vertical;

    // obj to hold the transformations and styles
    let itemListStyles = {};

    const currentPosition = this.getPosition(this.state.selectedItem);

    // if 3d is available, let's take advantage of the performance of transform
    const transformProp = CSSTranslate(currentPosition + '%', this.props.vertical);

    const transitionTime = this.props.transitionTime + 'ms';

    itemListStyles = {
      WebkitTransform: transformProp,
      transform: transformProp,
    };

    if (!this.state.swiping) {
      itemListStyles = {
        ...itemListStyles,
        WebkitTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
      };
    }

    const itemsClone = this.renderItems(true);
    const firstClone = itemsClone!.shift();
    const lastClone = itemsClone!.pop();

    let swiperProps = {
      onSwipeMove: this.onSwipeMove,
      onSwipeStart: this.onSwipeStart,
      onSwipeEnd: this.onSwipeEnd,
    };

    let ulProps = {
      style: {
        height: 'auto',
      },
    } as any;

    const containerStyles = {};

    if (isHorizontal) {
      //@ts-ignore
      swiperProps.onSwipeLeft = this.onSwipeForward;
      //@ts-ignore
      swiperProps.onSwipeRight = this.onSwipeBackwards;

      if (this.props.dynamicHeight) {
        const itemHeight = this.getVariableImageHeight(this.state.selectedItem);
        ulProps.style.height = itemHeight;
        //@ts-ignore
        containerStyles.height = itemHeight || 'auto';
      }
    } else {
      //@ts-ignore
      swiperProps.onSwipeUp = this.props.verticalSwipe === 'natural' ? this.onSwipeBackwards : this.onSwipeForward;
      //@ts-ignore
      swiperProps.onSwipeDown = this.props.verticalSwipe === 'natural' ? this.onSwipeForward : this.onSwipeBackwards;
      ulProps.style.height = this.state.itemSize;
      //@ts-ignore
      containerStyles.height = this.state.itemSize;
    }
    return (
      <div className={klass.ROOT(this.props.className)} ref={this.setCarouselWrapperRef}>
        <div className={klass.CAROUSEL(true)} style={{width: this.props.width}}>
          <div
            className={klass.WRAPPER(true, this.props.vertical)}
            style={containerStyles}
            ref={this.setItemsWrapperRef}
          >
            <Gesture ref={this.setListRef} {...swiperProps}>
              <ul style={{...itemListStyles, ...ulProps}} className={klass.SLIDER(true, this.state.swiping)}>
                {this.props.isInfinite && lastClone}
                {this.renderItems()}
                {this.props.isInfinite && firstClone}
              </ul>
            </Gesture>
          </div>
          {this.renderControls()}
          {this.renderStatus()}
        </div>
      </div>
    );
  }
}

export default Carousel;
