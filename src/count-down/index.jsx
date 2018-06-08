import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Countdown} from '@jdcfe/lrc';
import classNames from 'classnames';
import noop from '../_utils/noop';

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

  render() {
    const {prefixCls, leftTime, onEnd, overText, className, children} = this.props;
    const cls = classNames(prefixCls, className);
    return (
      <Countdown className={cls} leftTime={leftTime} overText={overText} onEnd={onEnd}>
        {date => children(date)}
      </Countdown>
    );
  }
}
