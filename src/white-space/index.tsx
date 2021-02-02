import * as React from 'react';
import classNames from 'classnames';
import noop from '../_utils/noop';
import HorizontalWhiteSpace from './HorizontalWhiteSpace';

export interface WhiteSpaceProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
export default function WhiteSpace(props: WhiteSpaceProps) {
  const {prefixCls, size, className, style, onClick} = props;
  const wrapCls = classNames(prefixCls, `${prefixCls}-${size}`, className);

  return <div className={wrapCls} style={style} onClick={onClick} />;
}

WhiteSpace.defaultProps = {
  prefixCls: 'Yep-whitespace',
  style: {},
  size: 'md',
  onClick: noop,
} as Partial<WhiteSpaceProps>;
WhiteSpace.HorizontalWhiteSpace = HorizontalWhiteSpace;
