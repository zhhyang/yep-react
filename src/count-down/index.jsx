import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '../_utils/noop';
import TimerService from './TimerService';

const addZero = n => {
  if (n < 10) {
    return `0${n}`;
  }
  return `${n}`;
};

const getFormateTime = time => {
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

export default class CountDown extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    leftTime: PropTypes.number.isRequired,
    onEnd: PropTypes.func,
    overText: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'Yep-count-down',
    style: {},
    overText: '活动结束',
    onEnd: noop,
  };

  constructor(props) {
    super(props);
    this.state = {seconds: props.leftTime};
    this.countDown = this.countDown.bind(this);
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

  render() {
    const {prefixCls, overText, className, children} = this.props;
    const cls = classNames(prefixCls, className);
    const restTime = this.state.seconds;
    const isOver = restTime <= 0;
    const date = !isOver && getFormateTime(restTime);
    return <div className={cls}>{isOver ? overText : children(date)}</div>;
  }
}
