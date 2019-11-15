import * as React from 'react';
import classNames from 'classnames';
import noop from '../_utils/noop';
import HorizontalWhiteSpace from './HorizontalWhiteSpace';

export interface WhiteSpaceProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick: () => void;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
export default class WhiteSpace extends React.PureComponent<WhiteSpaceProps> {
  static HorizontalWhiteSpace = HorizontalWhiteSpace;

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

WhiteSpace.HorizontalWhiteSpace = HorizontalWhiteSpace;
