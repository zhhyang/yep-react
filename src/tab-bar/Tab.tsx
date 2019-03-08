import * as React from 'react';
import classNames from 'classnames';
import Badge from '../badge';
import noop from '../_utils/noop';

export interface TabProps{
  prefixCls?: string;
  style?:React.CSSProperties;
  className?:string;
  tintColor?: string;
  unselectedTintColor?: string;
  dot?: boolean;
  badge?: string| number;
  selected?: boolean;
  selectedIcon: React.ReactNode| string;
  icon: React.ReactNode| string;
  title: string;
  onClick?: () => void;
}

export default class Tab extends React.PureComponent<TabProps> {

  static defaultProps = {
    prefixCls: 'Yep-tab-bar-tab',
    tintColor: '#ec3838',
    unselectedTintColor: '#6C707D',
    selected: false,
    dot: false,
    onClick: noop,
  };

  constructor(props:TabProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  onClick() {
    const onClick = this.props.onClick;
    if (onClick) {
      onClick();
    }
  }

  renderIcon() {
    const {selected, selectedIcon, icon, title, prefixCls, badge, dot} = this.props;

    const iconVal = selected ? selectedIcon : icon as any;

    const iconDom = React.isValidElement(iconVal) ? (
      iconVal
    ) : (
      <img className={`${prefixCls}-image`} src={iconVal} alt={title} />
    );
    if (badge) {
      return (
        <Badge text={badge} className={`${prefixCls}-badge tab-badge`}>
          {' '}
          {iconDom}{' '}
        </Badge>
      );
    }
    if (dot) {
      return (
        <Badge dot={true} className={`${prefixCls}-badge tab-dot`}>
          {iconDom}
        </Badge>
      );
    }
    return iconDom;
  }

  render() {
    const {title, prefixCls, selected, unselectedTintColor, tintColor, style, className} = this.props;
    const iconColor = selected ? tintColor : unselectedTintColor;
    return (
      <div className={classNames(prefixCls, className)} style={style} onClick={this.onClick}>
        <div className={`${prefixCls}-icon`} style={{color: iconColor}}>
          {this.renderIcon()}
        </div>
        <p className={`${prefixCls}-title`} style={{color: selected ? tintColor : unselectedTintColor}}>
          {title}
        </p>
      </div>
    );
  }
}
