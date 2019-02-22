import * as React from 'react';
import classNames from 'classnames';
export interface ListProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  renderHeader: (() =>void) | React.ReactNode;
  renderFooter: (() =>void) | React.ReactNode;
}
const List:React.FunctionComponent<ListProps> = ({prefixCls, children, className, style, renderHeader, renderFooter, ...restProps}) => {
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
};

List.defaultProps = {
  prefixCls: 'Yep-list',
  style: {},
};

export default List;
