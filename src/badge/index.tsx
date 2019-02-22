import * as React from 'react';
import classNames from 'classnames';

export interface BadgeProps {
  prefixCls: string;
  className: string;
  style: React.CSSProperties;
  text?: number | string;
  max: number;
  dot: boolean;
}

export default class Badge extends React.PureComponent<BadgeProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-badge',
    style: {},
    max: 99,
    dot: false,
  };

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
