import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import omit from 'lodash/omit';
import Gesture from '../gesture';
import noop from '../_utils/noop';

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    } else {
      el = el.parentElement;
    }
  }
  return null;
}

export default class SwipeAction extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    autoClose: PropTypes.bool,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    left: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
      })
    ),
    right: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
      })
    ),
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'Yep-swipe',
    style: {},
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen: noop,
    onClose: noop,
  };

  constructor() {
    super();
    this.renderButtons = this.renderButtons.bind(this);
    this.doOpenLeft = this.doOpenLeft.bind(this);
    this.doOpenRight = this.doOpenRight.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.createContentRef = this.createContentRef.bind(this);
    this.onCloseSwipe = this.onCloseSwipe.bind(this);
    this.onPanStart = this.onPanStart.bind(this);
    this.onPan = this.onPan.bind(this);
    this.onPanEnd = this.onPanEnd.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
    this.state = {
      swiping: false,
    };
  }

  componentDidMount() {
    this.btnsLeftWidth = this.left ? this.left.offsetWidth : 0;
    this.btnsRightWidth = this.right ? this.right.offsetWidth : 0;
    document.body.addEventListener('touchstart', this.onCloseSwipe, true);
  }

  componentWillUnmount() {
    document.body.removeEventListener('touchstart', this.onCloseSwipe, true);
  }

  onCloseSwipe(ev) {
    if (!(this.openedLeft || this.openedRight)) {
      return;
    }
    const pNode = closest(ev.target, `.${this.props.prefixCls}-actions`);
    if (!pNode) {
      ev.preventDefault();
      this.close();
    }
  }

  createContentRef(el) {
    this.content = ReactDOM.findDOMNode(el);
  }

  _getContentEasing(value, limit) {
    // limit content style left when value > actions width
    const delta = Math.abs(value) - Math.abs(limit);
    const isOverflow = delta > 0;
    const factor = limit > 0 ? 1 : -1;
    if (isOverflow) {
      value = limit + Math.pow(delta, 0.85) * factor;
      return Math.abs(value) > Math.abs(limit) ? limit : value;
    }
    return value;
  }

  _setStyle = value => {
    const limit = value > 0 ? this.btnsLeftWidth : -this.btnsRightWidth;
    const contentLeft = this._getContentEasing(value, limit);
    this.content.style.left = `${contentLeft}px`;
    if (this.cover) {
      this.cover.style.display = Math.abs(value) > 0 ? 'block' : 'none';
      this.cover.style.left = `${contentLeft}px`;
    }
  };

  open(value, openedLeft, openedRight) {
    if (!this.openedLeft && !this.openedRight && this.props.onOpen) {
      this.props.onOpen();
    }

    this.openedLeft = openedLeft;
    this.openedRight = openedRight;
    this._setStyle(value);
  }

  close() {
    if ((this.openedLeft || this.openedRight) && this.props.onClose) {
      this.props.onClose();
    }
    this._setStyle(0);
    this.openedLeft = false;
    this.openedRight = false;
  }

  doOpenLeft() {
    this.open(this.btnsLeftWidth, true, false);
  }

  doOpenRight() {
    this.open(-this.btnsRightWidth, true, false);
  }

  onPanStart(e) {
    const {direction, moveStatus} = e;
    // http://hammerjs.github.io/api/#directions
    const isLeft = direction === 2;
    const isRight = direction === 4;

    if (!isLeft && !isRight) {
      return;
    }
    const {left, right} = this.props;
    this.needShowRight = isLeft && right.length > 0;
    this.needShowLeft = isRight && left.length > 0;
    if (this.left) {
      this.left.style.visibility = this.needShowRight ? 'hidden' : 'visible';
    }
    if (this.right) {
      this.right.style.visibility = this.needShowLeft ? 'hidden' : 'visible';
    }
    if (this.needShowLeft || this.needShowRight) {
      this.swiping = true;
      this.setState({
        swiping: this.swiping,
      });
      this._setStyle(moveStatus.x);
    }
  }
  onPan(e) {
    const {
      moveStatus: {x},
    } = e;
    if (!this.swiping) {
      return;
    }
    this._setStyle(x);
  }

  onPanEnd(e) {
    if (!this.swiping) {
      return;
    }

    const {
      moveStatus: {x},
    } = e;

    const needOpenRight = this.needShowRight && Math.abs(x) > this.btnsRightWidth / 2;
    const needOpenLeft = this.needShowLeft && Math.abs(x) > this.btnsLeftWidth / 2;

    if (needOpenRight) {
      this.doOpenRight();
    } else if (needOpenLeft) {
      this.doOpenLeft();
    } else {
      this.close();
    }
    this.swiping = false;
    this.setState({
      swiping: this.swiping,
    });
    this.needShowLeft = false;
    this.needShowRight = false;
  }

  onBtnClick(ev, btn) {
    const onClick = btn.onClick;
    if (onClick) {
      onClick(ev);
    }
    if (this.props.autoClose) {
      this.close();
    }
  }

  renderButtons(buttons, ref) {
    const prefixCls = this.props.prefixCls;

    return buttons && buttons.length ? (
      <div className={`${prefixCls}-actions ${prefixCls}-actions-${ref}`} ref={el => (this[ref] = el)}>
        {buttons.map((btn, i) => (
          <div
            key={i}
            className={`${prefixCls}-btn ${btn.hasOwnProperty('className') ? btn.className : ''}`}
            style={btn.style}
            role="button"
            onClick={e => this.onBtnClick(e, btn)}
          >
            <div className={`${prefixCls}-btn-text`}>{btn.text || 'Click'}</div>
          </div>
        ))}
      </div>
    ) : null;
  }

  render() {
    const {className, style, prefixCls, left = [], right = [], children, disabled} = this.props;

    const divProps = omit(this.props, [
      'prefixCls',
      'left',
      'right',
      'children',
      'disabled',
      'autoClose',
      'onOpen',
      'onClose',
    ]);
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}-swiping`]: this.state.swiping,
    });
    return (left.length || right.length) && !disabled ? (
      <div className={cls} style={style} {...divProps}>
        <div className={`${prefixCls}-cover`} ref={el => (this.cover = el)} />
        {this.renderButtons(left, 'left')}
        {this.renderButtons(right, 'right')}
        <Gesture
          onPanStart={this.onPanStart}
          onPan={this.onPan}
          onPanEnd={this.onPanEnd}
          onSwipeLeft={this.doOpenRight}
          onSwipeRight={this.doOpenLeft}
        >
          <div className={`${prefixCls}-content`} ref={this.createContentRef}>
            {children}
          </div>
        </Gesture>
      </div>
    ) : (
      <div ref={this.createContentRef} {...divProps}>
        {children}
      </div>
    );
  }
}
