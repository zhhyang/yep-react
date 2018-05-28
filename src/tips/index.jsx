import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Tips extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.any),
    /**
     * 通知显示时间，-1代表一直存在，需要用户手动关闭
     * 单位毫秒
     */
    duration: PropTypes.number,
    /**
     * 通知类型，普通通知、警告通知、错误通知
     */
    tipType: PropTypes.oneOf(['info', 'warn', 'error']),

  }

  static defaultProps = {
    prefixCls: 'Yep-tips',
    className: '',
    style: {},
    duration: -1,
    tipType: 'info',
  }

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      prefixCls,
      className,
      style,
      tipType,
    } = this.props;

    const wrapperCls = classNames(prefixCls, className);
    const box = classNames('box', `box-${tipType}`);

    // icon分为info,warn,error三级
    return (
      <div className={wrapperCls} style={style}>
        <div className={box}>
          <i className="icon icon-info" />
          <span className="tips-text">输入不是合法电话号码</span>
          <i className="icon icon-close" />
        </div>
      </div>
    );
  }
}
