import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class TabPane extends PureComponent {
  static propTypes = {
    tab: PropTypes.node, //
    key: PropTypes.string,
    className: PropTypes.string,
    active: PropTypes.bool,
    fixX: PropTypes.bool,
    fixY: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: '',
    fixX: true,
    fixY: true,
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {className, prefixCls, children} = this.props;
    const cls = classNames(prefixCls, className);

    return <div className={cls}>{children}</div>;
  }
}
