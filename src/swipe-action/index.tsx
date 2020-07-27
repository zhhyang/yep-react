import * as React from 'react';
import classNames from 'classnames';
import {omit} from 'lodash-es';
import Gesture from '../gesture';
import noop from '../_utils/noop';
import closest from '../_utils/closest';

export interface ActionModel {
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

export interface SwipeActionProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  autoClose: boolean;
  disabled: boolean;
  left: ActionModel[];
  right: ActionModel[];
  onOpen: () => void;
  onClose: () => void;
  onMovingDistance: (distance: number) => void;
}

export default class SwipeAction extends React.PureComponent<SwipeActionProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-swipe',
    style: {},
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen: noop,
    onClose: noop,
    onMovingDistance: noop,
  };

  constructor(props: SwipeActionProps) {
    super(props);
    this.renderButtons = this.renderButtons.bind(this);
    this.doOpenLeft = this.doOpenLeft.bind(this);
    this.doOpenRight = this.doOpenRight.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.createContentRef = this.createContentRef.bind(this);
    this.createCoverRef = this.createCoverRef.bind(this);
    this.onCloseSwipe = this.onCloseSwipe.bind(this);
    this.onPanStart = this.onPanStart.bind(this);
    this.onPan = this.onPan.bind(this);
    this.onPanEnd = this.onPanEnd.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
    this.state = {
      swiping: false,
    };
  }
  btnsLeftWidth: number;
  left: HTMLDivElement;
  btnsRightWidth: number;
  right: HTMLDivElement;
  openedLeft: boolean;
  openedRight: boolean;

  content: HTMLDivElement;
  cover: HTMLDivElement;
  needShowRight: boolean;
  needShowLeft: boolean;
  swiping: boolean;

  componentDidMount() {
    this.btnsLeftWidth = this.left ? this.left.offsetWidth : 0;
    this.btnsRightWidth = this.right ? this.right.offsetWidth : 0;
    document.body.addEventListener('touchstart', this.onCloseSwipe, {passive: false});
  }

  componentWillUnmount() {
    // @ts-ignore
    document.body.removeEventListener('touchstart', this.onCloseSwipe, {passive: false});
  }

  componentDidUpdate() {
    //如果是动态改变right和left的length，需要重新计算
    this.btnsLeftWidth = this.left ? this.left.offsetWidth : 0;
    this.btnsRightWidth = this.right ? this.right.offsetWidth : 0;
  }

  onCloseSwipe(ev: any) {
    if (!(this.openedLeft || this.openedRight)) {
      return;
    }
    const pNode = closest(ev.target, `.${this.props.prefixCls}-actions`);
    if (!pNode) {
      ev.preventDefault();
      this.close();
    }
  }

  createContentRef(el: HTMLDivElement) {
    this.content = el;
  }
  createCoverRef(el: HTMLDivElement) {
    this.cover = el;
  }

  _getContentEasing(value: number, limit: number) {
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

  _setStyle = (value: number) => {
    const {onMovingDistance} = this.props;
    const limit = value > 0 ? this.btnsLeftWidth : -this.btnsRightWidth;
    const contentLeft = this._getContentEasing(value, limit);
    this.content.style.left = `${contentLeft}px`;
    if (this.cover) {
      this.cover.style.display = Math.abs(value) > 0 ? 'block' : 'none';
      this.cover.style.left = `${contentLeft}px`;
    }
    onMovingDistance(contentLeft);
  };

  open(value: number, openedLeft: boolean, openedRight: boolean) {
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

  onPanStart(e: any) {
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
  onPan(e: any) {
    const {
      moveStatus: {x},
    } = e;
    if (!this.swiping) {
      return;
    }
    this._setStyle(x);
  }

  onPanEnd(e: any) {
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

  onBtnClick(ev: any, btn: any) {
    const {onClick} = btn;
    if (onClick) {
      onClick(ev);
    }
    if (this.props.autoClose) {
      this.close();
    }
  }

  renderButtons(buttons: any, position: string, ref: any) {
    const {prefixCls} = this.props;

    return buttons && buttons.length > 0 ? (
      <div className={`${prefixCls}-actions ${prefixCls}-actions-${position}`} ref={ref}>
        {buttons.map((btn: any, i: number) => (
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
      'className',
      'style',
      'left',
      'right',
      'children',
      'disabled',
      'autoClose',
      'onOpen',
      'onClose',
      'onMovingDistance',
    ]);
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}-swiping`]: this.state.swiping,
    });
    return (left.length > 0 || right.length > 0) && !disabled ? (
      <div {...divProps} className={cls} style={style}>
        <div className={`${prefixCls}-cover`} ref={this.createCoverRef} />
        {this.renderButtons(left, 'left', (el: HTMLDivElement) => (this.left = el))}
        {this.renderButtons(right, 'right', (el: HTMLDivElement) => (this.right = el))}
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
      <div className={cls} style={style} {...divProps}>
        <div className={`${prefixCls}-cover`} ref={this.createCoverRef} />
        <div className={`${prefixCls}-content`} ref={this.createContentRef} {...divProps}>
          {children}
        </div>
      </div>
    );
  }
}
