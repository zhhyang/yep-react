import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Badge from '../badge';
import noop from '../_utils/noop';
export default class Tab extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    tintColor: PropTypes.string,
    unselectedTintColor: PropTypes.string,
    dot: PropTypes.bool,
    badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    selected: PropTypes.bool,
    selectedIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'Yep-tab-bar-tab',
    tintColor: '#ec3838',
    unselectedTintColor: '#6C707D',
    selected: false,
    dot: false,
    onClick: noop,
  };

  constructor() {
    super();
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

    const iconVal = selected ? selectedIcon : icon;

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
        <Badge dot className={`${prefixCls}-badge tab-dot`}>
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
