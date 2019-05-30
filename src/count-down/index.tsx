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
  onEnd: () => void;
  overText?: React.ReactNode;
  children: (date: any) => React.ReactNode;
}

export interface CountDownState {
  seconds: number;
}

export default class CountDown extends React.PureComponent<CountDownProps, CountDownState> {
  static defaultProps = {
    prefixCls: 'Yep-count-down',
    style: {},
    overText: '活动结束',
    onEnd: noop,
  };

  constructor(props: CountDownProps) {
    super(props);
    this.state = {seconds: props.leftTime};
    this.countDown = this.countDown.bind(this);
    this.renderText = this.renderText.bind(this);
  }

  componentDidMount() {
    TimerService.register(this.countDown);
  }

  componentWillUnmount() {
    TimerService.unregister(this.countDown);
  }

  countDown() {
    const {onEnd} = this.props;
    const seconds = this.state.seconds - 1;
    this.setState({
      seconds,
    });
    if (seconds === 0) {
      TimerService.unregister(this.countDown);
      onEnd();
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
    const date = (!isOver && getFormateTime(restTime)) as dateProps;
    return <div className={cls}>{isOver ? overText : this.renderText(date)}</div>;
  }
}
