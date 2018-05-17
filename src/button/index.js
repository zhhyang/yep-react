import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonGroup from './ButtonGroup';
import TouchFeedback from '../touch-feedback';
import Icon from '../icon';

export default class Button extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    inline: PropTypes.bool,
    size: PropTypes.string,
    submit: PropTypes.bool,
    onClick: PropTypes.func,
    activeClassName: PropTypes.string,
    activeStyle: PropTypes.object,
  };

  static defaultProps = {
    prefixCls: 'Yep-btn',
    disabled: false,
    type: 'default',
    activeStyle: {},
    onClick: () => {},
  };

  render() {
    const {
      prefixCls,
      className,
      type,
      submit,
      disabled,
      onClick,
      icon,
      inline,
      style,
      size,
      activeStyle,
      activeClassName,
      children,
    } = this.props;
    const El = submit ? 'button' : 'a';

    const cls = classNames(prefixCls, className, {
      'btn-primary': type === 'primary',
      'btn-disabled': disabled,
      'btn-ghost': type === 'ghost',
      'btn-default': type === 'default',
      'btn-inline': !!inline,
      'btn-sm': size === 'sm',
      'btn-md': size === 'md',
    });
    return (
      <TouchFeedback
        // tslint:disable-next-line:jsx-no-multiline-js
        activeClassName={activeClassName || (activeStyle ? `${prefixCls}-active` : undefined)}
        disabled={disabled}
        activeStyle={activeStyle}
      >
        <El
          className={cls}
          aria-disabled={disabled}
          onClick={disabled ? undefined : onClick}
          style={style}
          {...(submit ? {type: 'submit'} : {})}
        >
          {icon && <Icon type={icon} />}
          {children}
        </El>
      </TouchFeedback>
    );
  }
}

Button.ButtonGroup = ButtonGroup;
