import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Icon extends PureComponent {
  static propTypes = {
    /**
     * icon的type
     */
    type: PropTypes.string.isRequired,
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'Yep_icon',
    style: {},
    size: 'md',
  };

  render() {
    const {className, style, prefixCls, type, size} = this.props;
    const cls = classNames(prefixCls, className, `${type}`, `${prefixCls}-${size}`);
    return <i className={cls} style={style} />;
  }
}
