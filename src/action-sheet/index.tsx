import * as React from 'react';
import classNames from 'classnames';

import Popup from '../popup';

export interface ActionSheetProps {
  /**
   * 是否显示
   */
  show?: boolean;
  /**
   * 关闭事件回调
   */
  onCancel?: () => void;
  /**
   * 点击事件回调
   */
  itemClick?: (item: string, index: number) => void;

  prefixCls?: string;
  className?: string;

  style?: React.CSSProperties;
  /**
   * 是否拥有title
   */
  title?: string;
  /**
   * 如果hasCancel为true，content与取消按钮中是否有space间隔空间
   */
  space?: boolean;
  /**
   * 是否显示取消按钮
   */
  hasCancel?: boolean;

  data?: [];
  active?: number | string;
}

const ActionSheet: React.FC<ActionSheetProps> = ({
  show,
  onCancel,
  prefixCls,
  className,
  style,
  title,
  space,
  hasCancel,
  data,
  active,
  itemClick,
}) => {
  const onItemClick = (item: string, index: number) => {
    itemClick!(item, index);
  };
  const cls = classNames(prefixCls, className);
  return (
    <Popup show={show} onCancel={onCancel}>
      <div className={cls} style={style}>
        {title && <h1 className={`${prefixCls}-title border-bottom-1px`}>{title}</h1>}
        <div className={`${prefixCls}-content`}>
          <ul className={`${prefixCls}-list`}>
            {data!.map((item, index) => (
              <li
                key={index}
                className={classNames(`${prefixCls}-item`, 'border-bottom-1px', {
                  [`${prefixCls}-item_active`]: index === active || item === active,
                })}
                onClick={() => onItemClick(item, index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {hasCancel && space && <div className={`${prefixCls}-space`} />}
        {hasCancel && (
          <div className={`${prefixCls}-cancel`} onClick={onCancel}>
            <span>取消</span>
          </div>
        )}
      </div>
    </Popup>
  );
};

ActionSheet.defaultProps = {
  show: false,
  onCancel: () => {},
  prefixCls: 'Yep-action-sheet',
  hasCancel: false,
  space: false,
  data: [],
  itemClick: () => {},
} as Partial<ActionSheetProps>;

export default ActionSheet;
