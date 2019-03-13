import * as React from 'react';
import classNames from 'classnames';
import ListItem, {Brief} from './ListItem';
export interface ListProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  renderHeader: (() => void) | React.ReactNode;
  renderFooter: (() => void) | React.ReactNode;
}
class List extends React.Component<ListProps, any> {
  static Item = ListItem;
  static Brief = Brief;
  static defaultProps = {
    prefixCls: 'Yep-list',
    style: {},
  };

  render() {
    let {prefixCls, children, className, style, renderHeader, renderFooter, ...restProps} = this.props;
    const wrapCls = classNames(prefixCls, className);

    return (
      <div className={wrapCls} style={style} {...restProps}>
        {renderHeader && (
          <div className={`${prefixCls}-header`}>
            {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
          </div>
        )}
        {children && <div className={`${prefixCls}-body`}>{children}</div>}
        {renderFooter && (
          <div className={`${prefixCls}-footer`}>
            {typeof renderFooter === 'function' ? renderFooter() : renderFooter}
          </div>
        )}
      </div>
    );
  }
}

export default List;
