import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
export default class NavBar extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    leftIcon: PropTypes.node,
    leftContent: PropTypes.node,
    onLeftClick: PropTypes.func,
    close: PropTypes.bool,
    onCloseClick: PropTypes.func,
    rightContent: PropTypes.node,
    share: PropTypes.node,
  };

  static defaultProps = {
    prefixCls: 'Yep-nav-bar',
    style: {},
    leftIcon: <Icon type="arrow-back" size="xs" />,
    rightContent: <Icon type="lego_gengduo" />,
  };

  constructor() {
    super();
  }

  render() {
    const {
      prefixCls,
      className,
      style,
      children,
      onLeftClick,
      leftIcon,
      leftContent,
      close,
      onCloseClick,
      rightContent,
      share,
    } = this.props;
    const cls = classNames(prefixCls, className);
    return (
      <div className={cls} style={style}>
        <div className={`${prefixCls}-left`} role="button">
          {leftIcon && (
            <span className={`${prefixCls}-left-icon`} onClick={onLeftClick}>
              {leftIcon}
            </span>
          )}
          {leftContent}
          {close && (
            <div onClick={onCloseClick} className={`${prefixCls}-left-close`}>
              关闭
            </div>
          )}
        </div>

        <div className={`${prefixCls}-title`}>{children}</div>

        <div className={`${prefixCls}-right`}>
          {share && (
            <span className={`${prefixCls}-right-share`}>
              <Icon type="share" />
            </span>
          )}
          {rightContent}
        </div>
      </div>
    );
  }
}
