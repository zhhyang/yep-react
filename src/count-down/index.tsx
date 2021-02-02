import * as React from 'react';
import classNames from 'classnames';
import noop from '../_utils/noop';
import TimerService from './TimerService';
type dateProps = {
  dayStr: string;
  hourStr: string;
  minuteStr: string;
  secondStr: string;
  dayNum: number;
  hourNum: number;
  minuteNum: number;
  secondNum: number;
};
const addZero = (n: number) => {
  if (n < 10) {
    return `0${n}`;
  }
  return `${n}`;
};

const getFormateTime = (time: number): dateProps => {
  const dayStr = `${Math.floor(time / 60 / 60 / 24)}`;
  const hourStr = addZero(Math.floor((time / 60 / 60) % 24));
  const minuteStr = addZero(Math.floor((time / 60) % 60));
  const secondStr = addZero(Math.floor(time % 60));
  const dayNum = Math.floor(time / 60 / 60 / 24);
  const hourNum = Math.floor((time / 60 / 60) % 24);
  const minuteNum = Math.floor((time / 60) % 60);
  const secondNum = Math.floor(time % 60);
  return {
    dayStr,
    hourStr,
    minuteStr,
    secondStr,
    dayNum,
    hourNum,
    minuteNum,
    secondNum,
  };
};

export interface CountDownProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  leftTime: number;
  onEnd?: () => void;
  onChange?: (value: number) => void;
  overText?: React.ReactNode;
  children?: (date: any) => React.ReactNode;
}

export interface CountDownState {
  seconds: number;
}

export default class CountDown extends React.PureComponent<CountDownProps, CountDownState> {
  static defaultProps = {
    prefixCls: 'Yep-count-down',
    style: {},
    onEnd: noop,
  };

  constructor(props: CountDownProps) {
    super(props);
    this.state = {seconds: Math.round(props.leftTime)};
    this.countDown = this.countDown.bind(this);
    this.renderText = this.renderText.bind(this);
  }

  componentDidMount() {
    TimerService.register(this.countDown);
  }

  componentWillUnmount() {
    TimerService.unregister(this.countDown);
  }

  componentDidUpdate(prevProps: CountDownProps) {
    if (this.props.leftTime !== prevProps.leftTime) {
      //清掉定时器，再重新注册定时器，才能保证1s后减1，否则是按之前的定时器去减
      //暂时不按这种方式，有性能
      //TimerService.unregister(this.countDown);
      //TimerService.register(this.countDown);
      this.setState({
        seconds: Math.round(this.props.leftTime),
      });
    }
    if (this.props.leftTime >= 0 && this.state.seconds <= 0) {
      TimerService.register(this.countDown);
    }
  }

  countDown() {
    const {onEnd, onChange} = this.props;
    const seconds = this.state.seconds - 1;
    this.setState({
      seconds,
    });
    onChange && onChange(seconds);
    if (seconds <= 0) {
      TimerService.unregister(this.countDown);
      onEnd && onEnd();
    }
  }

  renderText(date: dateProps): React.ReactNode {
    const {children, prefixCls} = this.props;
    if (children) {
      return children(date);
    }
    const {hourStr, minuteStr, secondStr} = date;
    return (
      <div className={`${prefixCls}-default`}>
        <span className={`${prefixCls}-default-box`}>{hourStr}</span>:
        <span className={`${prefixCls}-default-box`}>{minuteStr}</span>:
        <span className={`${prefixCls}-default-box`}>{secondStr}</span>
      </div>
    );
  }

  render() {
    const {prefixCls, overText, className} = this.props;
    const cls = classNames(prefixCls, className);
    const restTime = this.state.seconds;
    const isOver = restTime <= 0;
    const date = getFormateTime(restTime) as dateProps;
    return <div className={cls}>{isOver && overText ? overText : this.renderText(date)}</div>;
  }
}
