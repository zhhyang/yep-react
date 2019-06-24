import * as React from 'react';
import classNames from 'classnames';
import {setTransform} from '../_utils/styleUtil';

export interface CarouselProps {
  prefixCls: string;
  style: React.CSSProperties;
  autoPlay?: false | number;
  className?: string;
  initPage: number;
  renderPage?: (active: number, total: number) => void;
  onTransitionEnd: (index: number) => void;
  isBounces?: boolean;
  isInfinite?: boolean;
  distance: number;
  dots?: boolean;
  dotsClass: string;
  vertical?: boolean;
  children?: React.ReactNodeArray;
}
export default class Carousel extends React.PureComponent<CarouselProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-carousel',
    style: {},
    autoPlay: false,
    initPage: 0,
    renderPage: null,
    isBounces: true,
    isInfinite: false,
    distance: 2,
    onTransitionEnd: () => {},
    dots: true,
    vertical: false,
  };
  timer: number;
  container: HTMLDivElement;
  isMoving: boolean;
  touchStartPlace: number;
  touchMovePlace: number;
  width: number;
  constructor(props: CarouselProps) {
    super(props);
    const count = React.Children.count(props.children);
    this.state = {
      currentIndex: props.isInfinite ? props.initPage + 1 : props.initPage,
      total: props.isInfinite ? count + 2 : count,
    };
    this.isMoving = true;
    this.touchStartPlace = 0;
    this.touchMovePlace = 0;
    this.width = 0;
    this.renderItem = this.renderItem.bind(this);
    this.touchStartHandle = this.touchStartHandle.bind(this);
    this.touchMoveHandle = this.touchMoveHandle.bind(this);
    this.touchEndHandle = this.touchEndHandle.bind(this);
    this.goPage = this.goPage.bind(this);
    this.goNextPage = this.goNextPage.bind(this);
    this.autoplayFunc = this.autoplayFunc.bind(this);
    this.cancelAutoPlay = this.cancelAutoPlay.bind(this);
  }

  componentDidMount() {
    this.width = this.props.vertical ? this.container.clientHeight : this.container.clientWidth;
    this.setContainerStyle();
    this.setState({
      isShow: true,
    });
    this.autoplayFunc();
  }

  cancelAutoPlay() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  autoplayFunc() {
    const {autoPlay} = this.props;
    // 是否自动播放
    if (autoPlay) {
      this.cancelAutoPlay();
      // @ts-ignore
      this.timer = setInterval(() => {
        if (!this.isMoving) {
          this.goNextPage();
        }
      }, autoPlay);
    }
  }

  touchStartHandle(e: React.TouchEvent<HTMLDivElement>) {
    this.cancelAutoPlay();
    this.isMoving = true;
    this.touchStartPlace = e.targetTouches[0].pageX;
    this.touchMovePlace = e.targetTouches[0].pageX;
  }

  touchMoveHandle(e: React.TouchEvent<HTMLDivElement>) {
    const {currentIndex, total} = this.state;
    const {isBounces} = this.props;
    if (!isBounces) {
      if (currentIndex === 0 && this.touchStartPlace <= e.targetTouches[0].pageX) {
        return false;
      } else if (total - 1 === currentIndex && this.touchStartPlace >= e.targetTouches[0].pageX) {
        return false;
      }
    }
    this.touchMovePlace = e.targetTouches[0].pageX;

    this.setContainerStyle();
  }

  touchEndHandle() {
    const {currentIndex} = this.state;
    const {distance} = this.props;

    const multiple = Math.round(((this.touchMovePlace - this.touchStartPlace) / this.width) * distance);
    const targetIndex = currentIndex - multiple;
    this.isMoving = false;
    this.touchStartPlace = 0;
    this.touchMovePlace = 0;
    this.goPage(targetIndex);
    this.autoplayFunc();
  }

  setContainerStyle = () => {
    const {vertical} = this.props;

    const cs = -(this.state.currentIndex * this.width) + (this.touchMovePlace - this.touchStartPlace);
    const transform = vertical ? `translate3d( 0px,${cs}px, 0px)` : `translate3d(${cs}px, 0px, 0px)`;
    this.container.style.transitionDuration = this.isMoving ? '0ms' : '300ms';
    setTransform(this.container.style, transform);
  };

  goPage(index: number) {
    const {total} = this.state;
    const {onTransitionEnd, isInfinite} = this.props;
    let targetIndex = index;
    targetIndex = targetIndex < 0 ? 0 : targetIndex;
    targetIndex = targetIndex > total - 1 ? total - 1 : targetIndex;
    console.log(targetIndex);
    this.setState(
      {
        currentIndex: targetIndex,
      },
      () => {
        this.setContainerStyle();
        // 当滚动临时的索引时
        let temp = targetIndex;
        // 真实的索引
        let realIndex = targetIndex;
        if (isInfinite && total > 3) {
          if (temp === 0) {
            temp = total - 2;
            realIndex = total - 1;
          } else if (temp === total - 1) {
            temp = 1;
            realIndex = 1;
          }
          setTimeout(() => {
            this.isMoving = true;
            this.setState(
              {
                currentIndex: temp,
              },
              () => {
                setTimeout(() => {
                  this.isMoving = false;
                }, 300);
              }
            );
          }, 300);
        }
        onTransitionEnd(realIndex - 2);
      }
    );
  }

  goNextPage() {
    const {total, currentIndex} = this.state;
    if (currentIndex + 1 === total) {
      this.goPage(0);
    } else {
      this.goPage(currentIndex + 1);
    }
  }

  renderItem(item: any, index: number) {
    const {vertical} = this.props;
    const style = vertical ? {height: `${this.width}px`} : {width: `${this.width}px`};
    return (
      <div className={`${this.props.prefixCls}__item`} style={style} key={`item${index}`}>
        {item}
      </div>
    );
  }

  renderPageComponent(active: number, realTotal: number) {
    const {prefixCls, renderPage, isInfinite, dots, dotsClass} = this.props;
    if (!dots) {
      return null;
    }
    const {total} = this.state;
    if (renderPage) {
      let temp = active;
      let realIndex = active;
      if (isInfinite && total > 3) {
        if (temp === 0) {
          realIndex = total - 1;
        } else if (temp === total - 1) {
          realIndex = 1;
        }
      }
      return renderPage(realIndex - 1, realTotal);
    }

    const arr = [];
    for (let i = 0; i < realTotal; i += 1) {
      //@ts-ignore
      arr.push(i);
    }
    return (
      <div className={classNames(`${prefixCls}__page`, {[dotsClass]: !!dotsClass})}>
        {arr.map((item, index) => {
          let flag = false;
          if (isInfinite && realTotal > 1) {
            if (active === 0) {
              flag = index === realTotal - 1;
            } else if (active === total - 1) {
              flag = index === 0;
            } else {
              flag = index === active - 1;
            }
          } else {
            flag = index === active;
          }
          return (
            <div
              key={`page_${item}`}
              className={classNames(`${prefixCls}__page-bullet`, {
                active: flag,
              })}
            />
          );
        })}
      </div>
    );
  }

  render() {
    const {currentIndex, isShow} = this.state;
    const {prefixCls, style, children, className, isInfinite, vertical} = this.props;
    const count = React.Children.count(children);
    const showStyle = isShow ? {} : ({visibility: 'hidden'} as React.CSSProperties);
    return (
      <div className={classNames(prefixCls, className)} style={showStyle}>
        <div
          className={classNames(`${prefixCls}__container`, {[`${prefixCls}__container--vertical`]: vertical})}
          style={{
            ...style,
          }}
          ref={div => (this.container = div as HTMLDivElement)}
          onTouchStart={this.touchStartHandle}
          onTouchMove={this.touchMoveHandle}
          onTouchEnd={this.touchEndHandle}
        >
          {isInfinite && count > 1 && this.renderItem(React.Children.toArray(children)[count - 1], count)}
          {React.Children.map(children, (item, index) => this.renderItem(item, index))}
          {isInfinite && count > 1 && this.renderItem(React.Children.toArray(children)[0], -1)}
        </div>
        {this.renderPageComponent(currentIndex, count)}
      </div>
    );
  }
}
