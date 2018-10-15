import React, {Component} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import ComposedHOC from './ComposedHOC';

class Picker extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    select: PropTypes.func,
    doScrollingComplete: PropTypes.func,
    computeChildIndex: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'Yep-picker',
  };

  scrollHanders = (() => {
    let scrollY = -1;
    let lastY = 0;
    let startY = 0;
    let scrollDisabled = false;
    let isMoving = false;

    const setTransform = (nodeStyle, value) => {
      nodeStyle.transform = value;
      nodeStyle.webkitTransform = value;
    };

    const setTransition = (nodeStyle, value) => {
      nodeStyle.transition = value;
      nodeStyle.webkitTransition = value;
    };

    const scrollTo = (x, y, time = 0.3) => {
      if (scrollY !== y) {
        scrollY = y;
        if (time) {
          setTransition(this.contentRef.style, `cubic-bezier(0,0,0.2,1.15) ${time}s`);
        }
        setTransform(this.contentRef.style, `translate3d(0,${-y}px,0)`);
        setTimeout(() => {
          this.scrollingComplete();
          if (this.contentRef) {
            setTransition(this.contentRef.style, '');
          }
        }, +time * 1000);
      }
    };
    //速度计
    const Velocity = ((minInterval = 30, maxInterval = 100) => {
      let _time = 0;
      let _y = 0;
      let _velocity = 0;
      const recorder = {
        record: y => {
          const now = +new Date();
          _velocity = (y - _y) / (now - _time);
          if (now - _time >= minInterval) {
            _velocity = now - _time <= maxInterval ? _velocity : 0;
            _y = y;
            _time = now;
          }
        },
        getVelocity: y => {
          if (y !== _y) {
            recorder.record(y);
          }
          return _velocity;
        },
      };
      return recorder;
    })();

    const onStart = y => {
      if (scrollDisabled) {
        return;
      }
      isMoving = true;
      startY = y;
      lastY = scrollY;
    };

    const onMove = y => {
      if (scrollDisabled || !isMoving) {
        return;
      }
      scrollY = lastY - y + startY;
      Velocity.record(y);
      this.onScrollChange();
      setTransform(this.contentRef.style, `translate3d(0,${-scrollY}px,0)`);
    };

    const onFinish = () => {
      isMoving = false;
      let targetY = scrollY;
      const height = (this.props.children.length - 1) * this.itemHeight;

      let time = 0.3;

      //const velocity = Velocity.getVelocity(targetY) * 4;
      //if (velocity) {
      //targetY = velocity * 40 + targetY;
      //time = Math.abs(velocity) * .1;
      //}
      if (targetY % this.itemHeight !== 0) {
        targetY = Math.round(targetY / this.itemHeight) * this.itemHeight;
      }
      if (targetY < 0) {
        targetY = 0;
      } else if (targetY > height) {
        targetY = height;
      }
      scrollTo(0, targetY, time < 0.3 ? 0.3 : time);

      this.onScrollChange();
    };

    return {
      touchstart: evt => onStart(evt.touches[0].screenY),
      mousedown: evt => onStart(evt.screenY),
      touchmove: evt => {
        evt.preventDefault();
        onMove(evt.touches[0].screenY);
      },
      mousemove: evt => {
        evt.preventDefault();
        onMove(evt.screenY);
      },
      touchend: () => onFinish(),
      touchcancel: () => onFinish(),
      mouseup: () => onFinish(),
      getValue: () => {
        return scrollY;
      },
      scrollTo: scrollTo,
      setDisabled: disabled => {
        scrollDisabled = disabled;
      },
    };
  })();

  constructor(props) {
    super(props);
    this.createRootRef = this.createRootRef.bind(this);
    this.createMaskRef = this.createMaskRef.bind(this);
    this.createIndicatorRef = this.createIndicatorRef.bind(this);
    this.createContentRef = this.createContentRef.bind(this);
    this.passiveSupported = this.passiveSupported.bind(this);
    this.onScrollChange = this.onScrollChange.bind(this);
    this.scrollingComplete = this.scrollingComplete.bind(this);
    this.fireValueChange = this.fireValueChange.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.scrollToWithoutAnimation = this.scrollToWithoutAnimation.bind(this);

    let selectedValueState;
    const {selectedValue, defaultSelectedValue} = props;
    if (selectedValue !== undefined) {
      selectedValueState = selectedValue;
    } else if (defaultSelectedValue !== undefined) {
      selectedValueState = defaultSelectedValue;
    } else {
      const children = React.Children.toArray(this.props.children);
      selectedValueState = children && children[0] && children[0].props.value;
    }
    this.state = {
      selectedValue: selectedValueState,
    };
  }

  createRootRef(el) {
    this.rootRef = el;
  }

  createMaskRef(el) {
    this.maskRef = el;
  }

  createIndicatorRef(el) {
    this.indicatorRef = el;
  }

  createContentRef(el) {
    this.contentRef = el;
  }

  passiveSupported() {
    let passiveSupported = false;

    try {
      const options = Object.defineProperty({}, 'passive', {
        get: () => {
          passiveSupported = true;
        },
      });
      window.addEventListener('test', null, options);
    } catch (err) {}
    return passiveSupported;
  }

  onScrollChange() {
    const {children, onScrollChange, computeChildIndex} = this.props;
    const top = this.scrollHanders.getValue();
    if (top >= 0) {
      const index = computeChildIndex(top, this.itemHeight, children.length);
      if (this.scrollValue !== index) {
        this.scrollValue = index;
        const child = children[index];
        if (child && onScrollChange) {
          onScrollChange(child.props.value);
        } else if (!child && console.warn) {
          console.warn('child not found', children, index);
        }
      }
    }
  }

  fireValueChange(selectedValue) {
    if (selectedValue !== this.state.selectedValue) {
      if (!('selectedValue' in this.props)) {
        this.setState({
          selectedValue,
        });
      }
      if (this.props.onValueChange) {
        this.props.onValueChange(selectedValue);
      }
    }
  }

  scrollingComplete() {
    const {doScrollingComplete} = this.props;
    const top = this.scrollHanders.getValue();
    if (top >= 0) {
      doScrollingComplete(top, this.itemHeight, this.fireValueChange);
    }
  }

  scrollTo(top) {
    this.scrollHanders.scrollTo(0, top);
  }

  scrollToWithoutAnimation(top) {
    this.scrollHanders.scrollTo(0, top, 0);
  }

  componentDidMount() {
    const {rootRef, maskRef, indicatorRef, contentRef} = this;

    const rootHeight = rootRef.getBoundingClientRect().height;
    const itemHeight = (this.itemHeight = indicatorRef.getBoundingClientRect().height);

    let itemNum = Math.floor(rootHeight / itemHeight);
    if (itemNum % 2 === 0) {
      itemNum--;
    }
    itemNum--;
    itemNum /= 2;
    contentRef.style.padding = `${itemHeight * itemNum}px 0`;
    indicatorRef.style.top = `${itemHeight * itemNum}px`;
    maskRef.style.backgroundSize = `100% ${itemHeight * itemNum}px`;

    this.scrollHanders.setDisabled(this.props.disabled);
    this.props.select(this.state.selectedValue, this.itemHeight, this.scrollTo);

    const passiveSupported = this.passiveSupported();
    const willPreventDefault = passiveSupported ? {passive: false} : false;
    const willNotPreventDefault = passiveSupported ? {passive: true} : false;

    Object.keys(this.scrollHanders).forEach(key => {
      if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
        const pd = key.indexOf('move') >= 0 ? willPreventDefault : willNotPreventDefault;
        rootRef.addEventListener(key, this.scrollHanders[key], pd);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if ('selectedValue' in nextProps) {
      if (this.state.selectedValue !== nextProps.selectedValue) {
        this.setState(
          {
            selectedValue: nextProps.selectedValue,
          },
          () => {
            this.props.select(
              nextProps.selectedValue,
              this.itemHeight,
              nextProps.noAnimate ? this.scrollToWithoutAnimation : this.scrollTo
            );
          }
        );
      }
    }
    this.scrollHanders.setDisabled(nextProps.disabled);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selectedValue !== nextState.selectedValue || this.props.children !== nextProps.children;
  }

  componentDidUpdate() {
    this.props.select(this.state.selectedValue, this.itemHeight, this.scrollToWithoutAnimation);
  }

  componentWillUnmount() {
    Object.keys(this.scrollHanders).forEach(key => {
      if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
        this.rootRef.removeEventListener(key, this.scrollHanders[key]);
      }
    });
  }

  render() {
    const {className, prefixCls, style, indicatorStyle, itemStyle, children} = this.props;

    const cls = classNames(prefixCls, {
      [className]: !!className,
    });

    const map = (item: any) => {
      const {className = '', style, value} = item.props;
      return (
        <div
          style={{...itemStyle, ...style}}
          key={value}
          className={classNames(`${prefixCls}-item`, className, {
            [`${prefixCls}-item-selected`]: value === this.state.selectedValue,
          })}
        >
          {item.children || item.props.children}
        </div>
      );
    };

    const items = React.Children ? React.Children.map(children, map) : [].concat(children).map(map);

    return (
      <div className={cls} style={style} ref={this.createRootRef}>
        <div className={`${prefixCls}-mask`} ref={this.createMaskRef} />
        <div className={`${prefixCls}-indicator`} style={indicatorStyle} ref={this.createIndicatorRef} />
        <div className={`${prefixCls}-content`} ref={this.createContentRef}>
          {items}
        </div>
      </div>
    );
  }
}

export default ComposedHOC(Picker);
