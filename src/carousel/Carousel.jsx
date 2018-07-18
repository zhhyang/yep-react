import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Carousel extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    autoPlay: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    className: PropTypes.string,
    initPage: PropTypes.number,
    renderPage: PropTypes.func,
    onTransitionEnd: PropTypes.func,
    isBounces: PropTypes.bool,
    isInfinite: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'Yep-carousel',
    autoPlay: false,
    initPage: 0,
    renderPage: null,
    isBounces: true,
    isInfinite: false,
    onTransitionEnd: () => {},
  };

  constructor(props) {
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
    this.timer = null; // 定时器

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
    let total = Object.prototype.toString.call(children) === '[object Array]' ? children.length : 1;
    let currentTemp = currentIndex;
    if (isInfinite && total > 1) {
      currentTemp += 1;
      total += 2;
    }
    this.setState(
      {
        width: document.querySelector(`.${this.props.prefixCls}__container`).clientWidth,
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
      this.timer = setInterval(() => {
        if (!this.state.isMoving) {
          this.goNextPage();
        }
      }, autoPlay);
    }
  }

  touchStartHandle(e) {
    this.cancelAutoPaly();
    this.setState({
      isMoving: true,
      touchStartPlace: e.targetTouches[0].pageX,
      touchMovePlace: e.targetTouches[0].pageX,
    });
  }

  touchMoveHandle(e) {
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
    this.setState({
      isMoving: false,
      touchStartPlace: 0,
      touchMovePlace: 0,
    });
    const multiple = Math.round((touchMovePlace - touchStartPlace) / width * 1.3);
    const targetIndex = currentIndex - multiple;
    this.goPage(targetIndex);
    this.autoplayFunc();
  }

  goPage(index) {
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

  renderItem(item, index) {
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
  renderPageComponent(active, realTotal) {
    const {renderPage, isInfinite} = this.props;
    const {total} = this.state;
    if (renderPage) {
      return renderPage(active, realTotal);
    }

    const arr = [];
    for (let i = 0; i < realTotal; i += 1) {
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
    let childrens = [];
    if (Object.prototype.toString.call(children) === '[object Array]') {
      childrens = this.props.children;
    } else {
      childrens = [this.props.children];
    }
    const showStyle = isShow ? null : {visibility: 'hidden'};
    return (
      <div className={classNames(prefixCls, className)} style={showStyle}>
        <div
          className={`${prefixCls}__container`}
          style={{
            transform: `translate3d(${-(currentIndex * width) + (touchMovePlace - touchStartPlace)}px, 0px, 0px)`,
            transitionDuration: isMoving ? '0ms' : '300ms',
          }}
          onTouchStart={this.touchStartHandle}
          onTouchMove={this.touchMoveHandle}
          onTouchEnd={this.touchEndHandle}
        >
          {isInfinite && children.length > 1 && this.renderItem(children[children.length - 1], children.length)}
          {childrens.map((item, index) => this.renderItem(item, index))}
          {isInfinite && children.length > 1 && this.renderItem(children[0], -1)}
        </div>
        {this.renderPageComponent(currentIndex, childrens.length)}
      </div>
    );
  }
}
