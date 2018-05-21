import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Badge extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    max: PropTypes.number,
    dot: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'Yep-badge',
    style: {},
    max: 99,
    dot: false,
  };

  constructor() {
    super();
  }

  render() {
    let {className, prefixCls, children, text, max, dot, ...restProps} = this.props;
    text = typeof text === 'number' && text > max ? `${max}+` : text;

    // dot mode don't need text
    if (dot) {
      text = '';
    }

    const scrollNumberCls = classNames({
      [`${prefixCls}-dot`]: dot,
      [`${prefixCls}-text`]: !dot,
    });

    const badgeCls = classNames(prefixCls, className, {
      [`${prefixCls}-not-a-wrapper`]: !children,
    });

    return (
      <span className={badgeCls}>
        {children}
        {(text || dot) && (
          <sup className={scrollNumberCls} {...restProps}>
            {text}
          </sup>
        )}
      </span>
    );
  }
}
