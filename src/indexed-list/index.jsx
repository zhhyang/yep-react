import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListView from './ListView';

export default class IndexedList extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    showIndicator: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'Yep-indexed-list',
    style: {},
  };

  constructor() {
    super();
    this.renderIndexedBar = this.renderIndexedBar.bind(this);
    this.renderIndicator = this.renderIndicator.bind(this);
    this.createIndicatorRef = this.createIndicatorRef.bind(this);
    this.createIndexedBarRef = this.createIndexedBarRef.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTouchCancel = this.onTouchCancel.bind(this);
  }

  createIndicatorRef(el) {
    this.indicator = el;
  }
  createIndexedBarRef(el) {
    this.indexedBar = el;
  }

  onTouchStart(e) {}

  onTouchMove(e) {}

  onTouchEnd(e) {}

  onTouchCancel(e) {}

  renderIndexedBar() {
    const {prefixCls, indexedBarStyle} = this.props;
    const sectionKvs = [
      {
        label: 'A',
        value: 'A',
      },
      {
        label: 'B',
        value: 'B',
      },
      {
        label: 'C',
        value: 'C',
      },
      {
        label: 'D',
        value: 'D',
      },
      {
        label: 'E',
        value: 'E',
      },
      {
        label: 'F',
        value: 'F',
      },
      {
        label: 'G',
        value: 'G',
      },
      {
        label: 'H',
        value: 'H',
      },
    ];
    return (
      <ul
        ref={this.createIndexedBarRef}
        className={`${prefixCls}-indexed-bar`}
        style={indexedBarStyle}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
        onTouchCancel={this.onTouchCancel}
      >
        {sectionKvs.map(kv => (
          <li key={kv.value} data-index-target={kv.value}>
            {kv.label}
          </li>
        ))}
      </ul>
    );
  }

  renderIndicator() {
    const {prefixCls, showIndicator} = this.props;
    const cls = classNames(`${prefixCls}-indicator`, {
      [`${prefixCls}-indicator-hide`]: !showIndicator || !this.state.showIndicator,
    });

    return showIndicator && <div className={cls} ref={this.createIndicatorRef} />;
  }

  render() {
    const {prefixCls, className, style, showQuickIndexedIndicator} = this.props;
    const cls = classNames(prefixCls, className);
    return (
      <div className={`${prefixCls}-container`}>
        <ListView className={cls} ref={el => (this.indexedListView = el)} />
        {this.renderIndexedBar()}
        {this.renderIndicator()}
      </div>
    );
  }
}
