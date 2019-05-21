import * as React from 'react';
import classNames from 'classnames';
import CellItem, {Brief} from './CellItem';
export interface CellProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  renderHeader: (() => void) | React.ReactNode;
  renderFooter: (() => void) | React.ReactNode;
}

export default class Cell extends React.PureComponent<CellProps, any> {
  static Item = CellItem;
  static Brief = Brief;

  static defaultProps = {
    prefixCls: 'Yep-cell',
    style: {},
  };

  constructor(props: CellProps) {
    super(props);
  }

  render() {
    let {prefixCls, children, className, style, renderHeader, renderFooter, ...restProps} = this.props;
    const wrapCls = classNames(prefixCls, className);

    return (
      <div className={wrapCls} style={style} {...restProps}>
        {children}
      </div>
    );
  }
}
