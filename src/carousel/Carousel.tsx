import * as React from 'react';
import classNames from 'classnames';

export interface CarouselProps {
  prefixCls: string;
  autoPlay?: false | number;
  className?: string;
  initPage?: number;
  renderPage?: (active:number,total:number) =>void;
  onTransitionEnd: (index:number) =>void;
  isBounces?: boolean;
  isInfinite?: boolean;
  distance: number;
}
export default class Carousel extends React.PureComponent<CarouselProps,any> {
  static defaultProps = {
    prefixCls: 'Yep-carousel',
    autoPlay: false,
    initPage: 0,
    renderPage: null,
    isBounces: true,
    isInfinite: false,
    distance: 2,
    onTransitionEnd: () => {},
  };
  timer:number;
  container:HTMLDivElement;
  constructor(props:CarouselProps) {
    super(props);
    this.state = {
      isShow: false,
      width: 0,
      touchStartPlace: 0,
      touchMovePlace: 0,
      currentIndex: props.initPage,
      total: 0,
      isMoving: true,
    };

    this.renderItem = this.renderItem.bind(this);
    this.touchStartHandle = this.touchStartHandle.bind(this);
    this.touchMoveHandle = this.touchMoveHandle.bind(this);
    this.touchEndHandle = this.touchEndHandle.bind(this);
    this.goPage = this.goPage.bind(this);
    this.goNextPage = this.goNextPage.bind(this);
    this.autoplayFunc = this.autoplayFunc.bind(this);
    this.cancelAutoPaly = this.cancelAutoPaly.bind(this);
  }

  componentDidMount() {
    const {children, isInfinite} = this.props;
    const {currentIndex} = this.state;
    let total = Object.prototype.toString.call(children) === '[object Array]' ? React.Children.count(children) : 1;
    let currentTemp = currentIndex;
    if (isInfinite && total > 1) {
      currentTemp += 1;
      total += 2;
    }
    this.setState(
      {
        width: this.container.clientWidth,
        total,
        currentIndex: currentTemp,
      },
      () => {
        this.setState({
          isShow: true,
        });
        setTimeout(() => {
          this.setState({
            isMoving: false,
          });
        }, 300);
      }
    );

    this.autoplayFunc();
  }

  cancelAutoPaly() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  autoplayFunc() {
    const {autoPlay} = this.props;
    // 是否自动播放
    if (autoPlay) {
      this.cancelAutoPaly();
      // @ts-ignore
      this.timer = setInterval(() => {
        if (!this.state.isMoving) {
          this.goNextPage();
        }
      }, autoPlay);
    }
  }

  touchStartHandle(e:React.TouchEvent<HTMLDivElement>) {
    this.cancelAutoPaly();
    this.setState({
      isMoving: true,
      touchStartPlace: e.targetTouches[0].pageX,
      touchMovePlace: e.targetTouches[0].pageX,
    });
  }

  touchMoveHandle(e:React.TouchEvent<HTMLDivElement>) {
    const {currentIndex, total, touchStartPlace} = this.state;
    const {isBounces} = this.props;
    if (!isBounces) {
      if (currentIndex === 0 && touchStartPlace <= e.targetTouches[0].pageX) {
        return false;
      } else if (total - 1 === currentIndex && touchStartPlace >= e.targetTouches[0].pageX) {
        return false;
      }
    }
    this.setState({
      touchMovePlace: e.targetTouches[0].pageX,
    });
  }

  touchEndHandle() {
    const {width, touchStartPlace, touchMovePlace, currentIndex} = this.state;
    const {distance} = this.props;
    this.setState({
      isMoving: false,
      touchStartPlace: 0,
      touchMovePlace: 0,
    });
    const multiple = Math.round(((touchMovePlace - touchStartPlace) / width) * distance);
    const targetIndex = currentIndex - multiple;
    this.goPage(targetIndex);
    this.autoplayFunc();
  }

  goPage(index:number) {
    const {total} = this.state;
    const {onTransitionEnd, isInfinite} = this.props;
    let targetIndex = index;
    targetIndex = targetIndex < 0 ? 0 : targetIndex;
    targetIndex = targetIndex > total - 1 ? total - 1 : targetIndex;
    this.setState(
      {
        currentIndex: targetIndex,
      },
      () => {
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
            realIndex = 0;
          }
          setTimeout(() => {
            this.setState(
              {
                currentIndex: temp,
                isMoving: true,
              },
              () => {
                setTimeout(() => {
                  this.setState({
                    isMoving: false,
                  });
                }, 300);
              }
            );
          }, 300);
        }
        onTransitionEnd(realIndex);
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

  renderItem(item:any, index:number) {
    return (
      <div className={`${this.props.prefixCls}__item`} style={{width: `${this.state.width}px`}} key={`item${index}`}>
        {item}
      </div>
    );
  }

  /**
   * 加载地址组件
   * @param {当前显示的图片索引} active
   * @param {真实页数} realTotal
   */
  renderPageComponent(active:number, realTotal:number) {
    const {renderPage, isInfinite} = this.props;
    const {total} = this.state;
    if (renderPage) {
      return renderPage(active, realTotal);
    }

    const arr = [];
    for (let i = 0; i < realTotal; i += 1) {
      //@ts-ignore
      arr.push(i);
    }
    return (
      <div className={`${this.props.prefixCls}__page`}>
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
              className={classNames(flag ? 'active' : '', `${this.props.prefixCls}__page-bullet`)}
            />
          );
        })}
      </div>
    );
  }

  render() {
    const {touchStartPlace, touchMovePlace, currentIndex, isMoving, width, isShow} = this.state;
    const {prefixCls, children, className, isInfinite} = this.props;
    let childrens = [] as any[]|React.ReactNode;
    const count = React.Children.count(children);
    if (Object.prototype.toString.call(children) === '[object Array]') {
      childrens = this.props.children;
    } else {
      childrens = [this.props.children];
    }
    const showStyle = isShow ? {} : {visibility: 'hidden'} as React.CSSProperties;
    return (
      <div className={classNames(prefixCls, className)} style={showStyle}>
        <div
          className={`${prefixCls}__container`}
          style={{
            transform: `translate3d(${-(currentIndex * width) + (touchMovePlace - touchStartPlace)}px, 0px, 0px)`,
            transitionDuration: isMoving ? '0ms' : '300ms',
          }}
          ref={div => this.container = div as HTMLDivElement}
          onTouchStart={this.touchStartHandle}
          onTouchMove={this.touchMoveHandle}
          onTouchEnd={this.touchEndHandle}
        >
          {isInfinite && count > 1 && this.renderItem(React.Children.toArray(children)[count - 1], count)}
          {
            React.Children.map(
              childrens,(item, index) => this.renderItem(item, index)
            )
          }
          {isInfinite && count > 1 && this.renderItem(React.Children.toArray(children)[0], -1)}
        </div>
        {this.renderPageComponent(currentIndex,React.Children.toArray(childrens).length)}
      </div>
    );
  }
}
