import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '../_utils/noop';

export default class WhiteSpace extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  };

  static defaultProps = {
    prefixCls: 'Yep-whitespace',
    style: {},
    size: 'md',
    onClick: noop,
  };

  render() {
    const {prefixCls, size, className, style, onClick} = this.props;
    const wrapCls = classNames(prefixCls, `${prefixCls}-${size}`, className);

    return <div className={wrapCls} style={style} onClick={onClick} />;
  }
}
