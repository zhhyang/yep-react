import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import Popup from '../popup';

export default class ActionSheet extends PureComponent {
  static propTypes = {
    /**
     * 是否显示
     */
    show: PropTypes.bool,
    /**
     * 关闭事件回调
     */
    onCancel: PropTypes.func,
    /**
     * 点击事件回调
     */
    itemClick: PropTypes.func,

    prefixCls: PropTypes.string,

    style: PropTypes.object,
    /**
     * 是否拥有title
     */
    title: PropTypes.string,
    /**
     * 如果hasCancel为true，content与取消按钮中是否有space间隔空间
     */
    space: PropTypes.bool,
    /**
     * 是否显示取消按钮
     */
    hasCancel: PropTypes.bool,

    data: PropTypes.array,
    active: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    show: false,
    onCancel: () => {},
    prefixCls: 'Yep-action-sheet',
    hasCancel: false,
    space: false,
    data: [],
    itemClick: () => {},
  };

  constructor() {
    super();
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(e) {
    const {itemClick} = this.props;
    const {item, index} = e.target.dataset;
    itemClick(item, index);
  }

  render() {
    const {show, onCancel, prefixCls, className, style, title, space, hasCancel, data, active} = this.props;

    const cls = classNames(prefixCls, className);
    return (
      <Popup show={show} onCancel={onCancel}>
        <div className={cls} style={style}>
          {title && <h1 className={`${prefixCls}-title border-bottom-1px`}>{title}</h1>}
          <div className={`${prefixCls}-content`}>
            <ul className={`${prefixCls}-list`}>
              {data.map((item, index) => (
                <li
                  key={index}
                  className={classNames(`${prefixCls}-item`, 'border-bottom-1px', {
                    [`${prefixCls}-item_active`]: index === active || item === active,
                  })}
                  data-item={item}
                  data-index={index}
                  onClick={this.onItemClick}
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
  }
}
