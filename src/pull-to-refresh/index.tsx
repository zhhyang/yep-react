import * as React from 'react';
import {setTransform} from '../_utils/styleUtil';

export interface Indicator {
  activate?: React.ReactNode;
  deactivate?: React.ReactNode;
  release?: React.ReactNode;
  finish?: React.ReactNode;
}
export interface PullToRefreshProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  pullDownToRefreshThreshold: number;
  maxPullDownDistance: number;
  refreshFunction?: () => void;
  refreshing: boolean;
  indicator: Indicator;
  getScrollContainer: () => React.ReactNode;
}

export type CurrentState = 'activate' | 'deactivate' | 'release' | 'finish';

const INDICATOR = {activate: '释放更新', deactivate: '下拉刷新', release: '加载中...', finish: '完成'};

export interface PullToRefreshState {
  currentState: CurrentState;
}

export default class PullToRefresh extends React.PureComponent<PullToRefreshProps, PullToRefreshState> {
  static defaultProps = {
    pullDownToRefreshThreshold: 50,
    maxPullDownDistance: 100,
    disableBrowserPullToRefresh: true,
    style: {},
    prefixCls: 'Yep-pull-to-refresh',
    indicator: INDICATOR,
    getScrollContainer: () => undefined,
  };

  private container: any;
  private ele: any;

  private containerRef = (container: HTMLDivElement) => {
    this.container = container;
  };

  startY: number;
  startX: number;
  currentY: number;
  currentX: number;
  dragging: boolean;

  constructor(props: PullToRefreshProps) {
    super(props);
    this.state = {
      currentState: 'deactivate' as CurrentState,
    };
    // variables to keep track of pull down behaviour
    this.startY = 0;
    this.startX = 0;
    this.currentY = 0;
    this.currentX = 0;
    this.dragging = false;

    // will be populated in componentDidMount
    // based on the height of the pull down element
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  componentDidMount() {
    this.ele = this.props.getScrollContainer() || this.container;
    this.ele.addEventListener('touchstart', this.onStart, {passive: false});
    this.ele.addEventListener('touchmove', this.onMove, {passive: false});
    this.ele.addEventListener('touchend', this.onEnd, {passive: false});

    this.forceUpdate();

    if (typeof this.props.refreshFunction !== 'function') {
      throw new Error(
        `Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected.'`
      );
    }
  }
  componentDidUpdate(prevProps: PullToRefreshProps): void {
    if (prevProps === this.props || prevProps.refreshing === this.props.refreshing) {
      return;
    }
    this.triggerPullToRefresh();
  }

  componentWillUnmount() {
    this.ele.removeEventListener('touchstart', this.onStart);
    this.ele.removeEventListener('touchmove', this.onMove);
    this.ele.removeEventListener('touchend', this.onEnd);
  }

  triggerPullToRefresh = () => {
    if (this.props.refreshing) {
      // change dom need after setState
      this.setState({currentState: 'release'}, () => this.setInfScrollStyle(this.props.pullDownToRefreshThreshold + 1));
    } else {
      this.setState({currentState: 'finish'}, () => this.reset());
    }
  };

  onStart(evt: any) {
    this.dragging = true;
    this.startY = evt.pageY || evt.touches[0].pageY;
    this.startX = evt.pageX || evt.touches[0].pageX;
    this.currentY = this.startY;
    this.currentX = this.startX;

    this.container.style.willChange = 'transform';
    this.container.style.transition = `transform 0.2s cubic-bezier(0,0,0.31,1)`;
  }

  isMoveEdge = () => {
    const container = this.props.getScrollContainer();
    if (container && container === document.body) {
      const scrollNode = document.scrollingElement ? document.scrollingElement : document.body;
      return scrollNode.scrollTop <= 0;
    }
    const refScrollTop = container && container.scrollTop || 0;
    const tops = [
      window.pageYOffset || 0,
      document.documentElement.scrollTop,
      refScrollTop
    ];
    return Math.max(...tops) <= 0;
  };

  onMove(evt: any) {
    if (!this.dragging) return;

    this.currentY = evt.pageY || evt.touches[0].pageY;
    this.currentX = evt.pageX || evt.touches[0].pageX;

    // user is scrolling down to up
    if (this.currentY < this.startY) return;

    // 当前点与起始点形成的角度大于30度且小于150度时，下拉；其他情况不处理。
    // 公式： (startY-currY)/(startX-currX)>1/√3~=0.58
    // console.log("onMove evt", this.currentX, this.startX, this.currentY, this.startY);
    if(this.currentX !== this.startX) {
      let bi = (this.startY - this.currentY) / (this.startX - this.currentX);
      bi = Math.abs(bi).toFixed(2);
      if (bi < 0.58) {
        // console.log('不能下拉呀');
        return;
      }
    }

    if (this.isMoveEdge()) {
      //禁止整个页面下拉效果
      evt.preventDefault();
      evt.stopPropagation();
      if (this.currentY - this.startY >= this.props.pullDownToRefreshThreshold) {
        if (this.state.currentState === 'deactivate') {
          this.setState({
            currentState: 'activate',
          });
        }
      } else {
        if (this.state.currentState !== 'deactivate') {
          this.setState({currentState: 'deactivate'});
        }
      }

      if (this.currentY - this.startY > this.props.maxPullDownDistance) return;

      this.container.style.overflow = 'visible';
      this.setInfScrollStyle(this.currentY - this.startY);
    }
  }

  onEnd() {
    this.startY = 0;
    this.startX = 0;
    this.currentY = 0;
    this.currentX = 0;

    this.dragging = false;
    if (this.state.currentState === 'activate') {
      this.setState({currentState: 'release'});
      this.props.refreshFunction && this.props.refreshFunction();
    } else {
      this.reset();
    }
  }
  setInfScrollStyle = (cs: number) => {
    if (this.container) {
      setTransform(this.container.style, `translate3d(0px,${cs}px,0)`);
    }
  };
  reset = () => {
    this.setInfScrollStyle(0);
    requestAnimationFrame(() => {
      this.container.style.overflow = 'auto';
      this.container.style.transform = 'none';
      this.container.style.willChange = 'none';
    });
  };

  render() {
    const {prefixCls, className, style, indicator, children} = this.props;
    const componentStyle = {
      height: 'auto',
      overflow: 'hidden',
      WebkitOverflowScrolling: 'touch',
      ...style,
    } as React.CSSProperties;

    const outerDivStyle = {overflow: 'auto'};
    return (
      <div style={outerDivStyle}>
        <div className={className} ref={this.containerRef} style={componentStyle}>
          <div className={`${prefixCls}-indicator`}>
            {indicator[this.state.currentState] || INDICATOR[this.state.currentState]}
          </div>
          {children}
        </div>
      </div>
    );
  }
}
