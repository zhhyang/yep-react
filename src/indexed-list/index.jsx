import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListView from './ListView';
import {_event, getOffsetTop} from './util';
import List from '../list';
import noop from '../_utils/noop';
const {Item} = List;

function setDocumentScrollTop(val) {
  window.document.body.scrollTop = val; // chrome61 is invalid
  window.document.documentElement.scrollTop = val;
}
let draggingIndexBar = false;

document.addEventListener(
  'touchmove',
  e => {
    draggingIndexBar && e.preventDefault();
  },
  {passive: false}
);
export default class IndexedList extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    listPrefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    showIndicator: PropTypes.bool,
    data: PropTypes.object.isRequired,
    renderSectionHeader: PropTypes.func,
    renderRow: PropTypes.func,
    renderSectionWrapper: PropTypes.func,
    quickIndexedBarTop: PropTypes.object,
    useBodyScroll: PropTypes.bool,
    onQuickSearch: PropTypes.func,
    indexedBarStyle: PropTypes.object,
    indicatorStyle: PropTypes.object,
    enableQuickIndexedBarTop: PropTypes.bool,
    activeBar: PropTypes.string,
    keyLabel: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'Yep-indexed-list',
    listPrefixCls: 'Yep-list',
    style: {},
    indexedBarStyle: {},
    indicatorStyle: {},
    showIndicator: false,
    renderSectionHeader: sectionData => <div>{sectionData}</div>,
    quickIndexedBarTop: {label: '#', value: '#'},
    useBodyScroll: true,
    onQuickSearch: noop,
    enableQuickIndexedBarTop: true,
    keyLabel: 'value',
  };

  sectionComponents = {};

  constructor() {
    super();
    this.renderIndexedBar = this.renderIndexedBar.bind(this);
    this.renderIndicator = this.renderIndicator.bind(this);
    this.createIndicatorRef = this.createIndicatorRef.bind(this);
    this.createIndexedBarRef = this.createIndexedBarRef.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.getQsInfo = this.getQsInfo.bind(this);
    this._disableParent = this._disableParent.bind(this);
    this.updateIndicator = this.updateIndicator.bind(this);
    this.state = {
      showIndicator: false,
    };
  }

  createIndicatorRef(el) {
    this.indicator = el;
  }

  createIndexedBarRef(el) {
    this.indexedBar = el;
  }

  _disableParent(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  onQuickSearchTop(sectionID, topId) {
    if (this.props.useBodyScroll) {
      setDocumentScrollTop(0);
    } else {
      ReactDOM.findDOMNode(this.indexedListView.listViewRef).scrollTop = 0;
    }
    this.props.onQuickSearch(sectionID, topId);
  }

  onQuickSearch = sectionID => {
    const lv = ReactDOM.findDOMNode(this.indexedListView.listViewRef);
    const sec = ReactDOM.findDOMNode(this.sectionComponents[sectionID]);
    if (this.props.useBodyScroll) {
      setDocumentScrollTop(sec.getBoundingClientRect().top - lv.getBoundingClientRect().top + getOffsetTop(lv));
    } else {
      lv.scrollTop += sec.getBoundingClientRect().top - lv.getBoundingClientRect().top;
    }
    this.props.onQuickSearch(sectionID);
  };

  updateIndicator(ele, end = false) {
    let el = ele;
    if (!el.getAttribute('data-index-target')) {
      el = el.parentNode;
    }
    if (this.props.showIndicator) {
      this.indicator.innerText = el.innerText.trim();
      this.setState({
        showIndicator: true,
      });
      if (this._indicatorTimer) {
        clearTimeout(this._indicatorTimer);
      }
      this._indicatorTimer = setTimeout(() => {
        this.setState({
          showIndicator: false,
        });
      }, 1000);
    }

    const cls = `${this.props.prefixCls}-indexed-bar-over`;
    const activeCls = `${this.props.prefixCls}-indexed-bar-active`;
    // can not use setState to change className, it has a big performance issue!
    this._hCache.forEach(d => {
      d[0].className = d[0].className.replace(cls, '').replace(activeCls, '');
      //add active class
      d[0].className = `${d[0].className} ${
        d[0].getAttribute('data-index-target') === el.innerText.trim() ? activeCls : ''
      }`.trim();
    });
    if (!end) {
      el.className = `${el.className} ${cls}`.trim();
    }
  }

  onTouchStart(e) {
    this._target = e.target;
    this._basePos = this.indexedBar.getBoundingClientRect();
    draggingIndexBar = true;
    document.body.className = `${document.body.className} ${this.props.prefixCls}-qsb-moving`;
    this.updateIndicator(this._target);
  }

  onTouchMove(e) {
    e.preventDefault();
    if (this._target) {
      const ex = _event(e);
      const basePos = this._basePos;
      let _pos;
      if (ex.clientY >= basePos.top && ex.clientY <= basePos.top + this._qsHeight) {
        _pos = Math.floor((ex.clientY - basePos.top) / this._avgH);
        let target;
        if (_pos in this._hCache) {
          target = this._hCache[_pos][0];
        }
        if (target) {
          const overValue = target.getAttribute('data-index-target');
          if (this._target !== target) {
            if (this.props.quickIndexedBarTop.value === overValue) {
              this.onQuickSearchTop(undefined, overValue);
            } else {
              this.onQuickSearch(overValue);
            }
            this.updateIndicator(target);
          }
          this._target = target;
        }
      }
    }
  }

  onTouchEnd(e) {
    if (!this._target) {
      return;
    }
    draggingIndexBar = false;
    document.body.className = document.body.className.replace(
      new RegExp(`\\s*${this.props.prefixCls}-qsb-moving`, 'g'),
      ''
    );
    this.updateIndicator(this._target, true);
    this._target = null;
  }

  componentDidMount() {
    this.getQsInfo();
  }

  componentDidUpdate() {
    this.getQsInfo();
  }

  componentWillUnmount() {
    if (this._indicatorTimer) {
      clearTimeout(this._indicatorTimer);
    }
    this._hCache = null;
  }

  getQsInfo() {
    const quickSearchBar = this.indexedBar;
    const height = quickSearchBar.offsetHeight;
    const hCache = [];
    [].slice.call(quickSearchBar.querySelectorAll('[data-index-target]')).forEach(d => {
      hCache.push([d]);
    });
    const _avgH = height / hCache.length;
    let _top = 0;
    for (let i = 0, len = hCache.length; i < len; i++) {
      _top = i * _avgH;
      hCache[i][1] = [_top, _top + _avgH];
    }
    this._qsHeight = height;
    this._avgH = _avgH;
    this._hCache = hCache;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeBar !== this.props.activeBar) {
      const activeCls = `${this.props.prefixCls}-indexed-bar-active`;
      this._hCache.forEach(d => {
        d[0].className = d[0].className.replace(activeCls, '');
        //add active class
        d[0].className = `${d[0].className} ${
          d[0].getAttribute('data-index-target') === nextProps.activeBar ? activeCls : ''
        }`;
      });
    }
  }

  renderIndexedBar() {
    const {prefixCls, indexedBarStyle, data, quickIndexedBarTop, enableQuickIndexedBarTop} = this.props;
    const sectionKvs = Object.keys(data).map(item => ({
      label: item,
      value: item,
    }));
    return (
      <ul
        ref={this.createIndexedBarRef}
        className={`${prefixCls}-indexed-bar`}
        style={indexedBarStyle}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
        onTouchCancel={this.onTouchEnd}
      >
        {enableQuickIndexedBarTop && (
          <li
            data-index-target={quickIndexedBarTop.value}
            onClick={() => this.onQuickSearchTop(undefined, quickIndexedBarTop.value)}
          >
            {quickIndexedBarTop.label}
          </li>
        )}

        {sectionKvs.map(kv => (
          <li key={kv.value} data-index-target={kv.value} onClick={() => this.onQuickSearch(kv.value)}>
            {kv.label}
          </li>
        ))}
      </ul>
    );
  }

  renderIndicator() {
    const {prefixCls, showIndicator, indicatorStyle} = this.props;
    const cls = classNames(`${prefixCls}-indicator`, {
      [`${prefixCls}-indicator-hide`]: !showIndicator || !this.state.showIndicator,
    });

    return showIndicator && <div className={cls} style={indicatorStyle} ref={this.createIndicatorRef} />;
  }

  render() {
    const {
      prefixCls,
      listPrefixCls,
      className,
      renderSectionHeader,
      renderHeader,
      renderFooter,
      renderBodyComponent,
      ...restProps
    } = this.props;
    const cls = classNames(prefixCls, listPrefixCls, className);
    const sectionHeaderClassName = classNames([`${prefixCls}-section-header`], [`${listPrefixCls}-body`]);
    const otherProps = {};
    if (renderHeader) {
      otherProps.renderHeader = () => <div className={`${listPrefixCls}-header`}>{renderHeader()}</div>;
    }

    if (renderFooter) {
      otherProps.renderFooter = () => <div className={`${listPrefixCls}-footer`}>{renderFooter()}</div>;
    }
    return (
      <div className={`${prefixCls}-container`}>
        <ListView
          className={cls}
          ref={el => (this.indexedListView = el)}
          sectionBodyClassName={`${prefixCls}-section-body ${listPrefixCls}-body`}
          renderBodyComponent={renderBodyComponent || (() => <div className={`${listPrefixCls}-body`} />)}
          renderSectionHeader={(sectionData, sectionId) =>
            React.cloneElement(
              <div>
                <Item prefixCls={listPrefixCls}>{renderSectionHeader(sectionData, sectionId)}</Item>
              </div>,
              {
                ref: el => (this.sectionComponents[sectionId] = el),
                className: sectionHeaderClassName,
              }
            )
          }
          {...restProps}
          {...otherProps}
        />
        {this.renderIndexedBar()}
        {this.renderIndicator()}
      </div>
    );
  }
}
