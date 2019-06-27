import * as React from 'react';

import classNames from 'classnames';
import noop from '../_utils/noop';

export interface HorizontalWhiteSpaceProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick: () => void;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
export default class HorizontalWhiteSpace extends React.PureComponent<HorizontalWhiteSpaceProps> {
  static defaultProps = {
    prefixCls: 'Yep-whitespace-horizontal',
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
