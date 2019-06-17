import * as React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import noop from '../_utils/noop';
export interface NavBarProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  leftIcon?: React.ReactNode;
  leftContent: React.ReactNode;
  onLeftClick?: () => void;
  close?: boolean;
  closeContent?: React.ReactNode;
  onCloseClick?: () => void;
  rightContent: React.ReactNode;
  share?: React.ReactNode;
  onRightClick?: () => void;
}
export default class NavBar extends React.PureComponent<NavBarProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-nav-bar',
    style: {},
    leftIcon: <Icon type="arrow-back" size="xs" />,
    closeContent: '关闭',
    //rightContent: <Icon type="lego_gengduo" />,
    onLeftClick: noop,
    onCloseClick: noop,
    onRightClick: noop,
  };

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
      closeContent,
      onCloseClick,
      rightContent,
      share,
      onRightClick,
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
          <span className={`${prefixCls}-left-content`} onClick={onLeftClick}>
            {leftContent}
          </span>
          {close && (
            <div onClick={onCloseClick} className={`${prefixCls}-left-close`}>
              {closeContent}
            </div>
          )}
        </div>

        <div className={`${prefixCls}-title`}>{children}</div>

        <div className={`${prefixCls}-right`}>
          {share && <span className={`${prefixCls}-right-share`}>{share}</span>}
          {rightContent && (
            <span className={`${prefixCls}-right-content`} onClick={onRightClick}>
              {rightContent}
            </span>
          )}
        </div>
      </div>
    );
  }
}
