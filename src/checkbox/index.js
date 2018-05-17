import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import BaseCheckbox from './BaseCheckbox';
import classNames from 'classnames';

export default class Checkbox extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'Yep-checkbox',
  };

  render() {
    const {className, style, children, ...restProps} = this.props;
    const {prefixCls} = restProps;
    const wrapCls = classNames(`${prefixCls}-wrapper`, className);
    return (
      <label className={wrapCls} style={style}>
        <BaseCheckbox {...restProps} {...(children ? {label: children} : {})} />
      </label>
    );
  }
}
