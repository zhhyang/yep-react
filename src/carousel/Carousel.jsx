import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Carousel extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    autoPlay: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    initPage: PropTypes.number,
    renderPage: PropTypes.func,
    onTransitionEnd: PropTypes.func,
    style: PropTypes.object,
    pageStyle: PropTypes.object,
    pageItemStyle: PropTypes.object,
    pageActiveitemStyle: PropTypes.object,
  };

  static defaultProps = {
    prefixCls: 'Yep-carousel',
    autoPlay: false,
    initPage: 0,
    renderPage: null,
    onTransitionEnd: () => {},
    style: {},
    pageStyle: {},
    pageItemStyle: {},
    pageActiveitemStyle: {},
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
      isMoving: false,
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
    const {children} = this.props;
    this.setState(
      {
        width: document.querySelector(`.${this.props.prefixCls}__container`).clientWidth,
        total: children.length,
      },
      () => {
        this.setState({
          isShow: true,
        });
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
    const {onTransitionEnd} = this.props;
    let targetIndex = index;
    targetIndex = targetIndex < 0 ? 0 : targetIndex;
    targetIndex = targetIndex > total - 1 ? total - 1 : targetIndex;
    this.setState(
      {
        currentIndex: targetIndex,
      },
      () => {
        onTransitionEnd(targetIndex);
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

  renderPageComponent(active, total) {
    const {renderPage, pageStyle, pageItemStyle, pageActiveitemStyle} = this.props;

    if (renderPage) {
      return renderPage(active, total);
    }

    const arr = [];
    for (let i = 0; i < total; i += 1) {
      arr.push(i);
    }
    return (
      <div style={pageStyle} className={`${this.props.prefixCls}__page`}>
        {arr.map((item, index) => {
          const activeStyle = index === active ? pageActiveitemStyle : {};
          return (
            <div
              style={{...pageItemStyle, ...activeStyle}}
              key={`page_${item}`}
              className={classNames(index === active ? 'active' : '', `${this.props.prefixCls}__page-bullet`)}
            />
          );
        })}
      </div>
    );
  }

  render() {
    const {touchStartPlace, touchMovePlace, currentIndex, isMoving, width, isShow} = this.state;
    const {prefixCls, children, style} = this.props;
    let childrens = [];
    if (Object.prototype.toString.call(children) === '[object Array]') {
      childrens = this.props.children;
    } else {
      childrens = [this.porps.children];
    }
    const showStyle = isShow ? null : {visibility: 'hidden'};
    return (
      <div className={prefixCls} style={{...showStyle, ...style}}>
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
          {childrens.map((item, index) => this.renderItem(item, index))}
        </div>
        {this.renderPageComponent(currentIndex, childrens.length)}
      </div>
    );
  }
}
