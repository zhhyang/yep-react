import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popup from '../popup';
import Icon from '../icon';
import Tabs from '../tabs';
import TabBar from './TabBar';
const {TabPanel} = Tabs;
export default class AreaPicker extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    maskCloseable: PropTypes.bool,
    title: PropTypes.string,
    initialData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    fetchAction: PropTypes.func.isRequired,
  };

  static defaultProps = {
    prefixCls: 'Yep-area-picker',
    title: '配送至',
    style: {},
    maskCloseable: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      tabs: [],
      data: [props.initialData],
      defaultIndex: 0,
    };
  }

  onClick = (city, index) => {
    const {fetchAction, onOk} = this.props;
    const {tabs, data} = this.state;
    const {id} = city;
    let tempTabs = tabs;
    const tempData = data;
    if (tempTabs[index]) {
      tempTabs.splice(index);
    }
    tempData.splice(index + 1);
    if (tabs.filter(tab => tab.id === id).length === 0) {
      tempTabs = tempTabs.concat(city);
    }
    fetchAction(city, index).then(res => {
      if (res.length > 0) {
        const defaultIndex = index + 1;
        this.setState({
          tabs: tempTabs,
          data: tempData.concat([res]),
          defaultIndex,
        });
        this.tabs.tabClickGoToTab(defaultIndex);
      } else {
        this.setState({
          tabs: tempTabs,
          data: tempData,
        });
        onOk(tempTabs);
      }
    });
  };

  render() {
    const {show, onCancel, prefixCls, className, style, title, maskCloseable} = this.props;
    const {data, tabs, defaultIndex} = this.state;
    const cls = classNames(prefixCls, className);

    return (
      <Popup show={show} onCancel={onCancel} maskCloseable={maskCloseable}>
        <div className={cls} style={style}>
          <div className={`${prefixCls}-title-wrapper`}>
            <h1 className={`${prefixCls}-title`}>{title}</h1>
            <Icon type={'lego_cuowu2'} size={'xxs'} onClick={onCancel} />
          </div>

          <Tabs
            defaultIndex={defaultIndex}
            ref={ref => (this.tabs = ref)}
            renderTabBar={props => <TabBar {...props} />}
          >
            {data.map((item, index) => (
              <TabPanel tab={(tabs[index] && tabs[index].name) || '请选择'} key={index}>
                <div className={`${prefixCls}-content`}>
                  <ul>
                    {item.map(city => (
                      <li key={city.id} onClick={() => this.onClick(city, index)}>
                        {city.name}
                        {tabs.includes(city) && (
                          <Icon className={`${prefixCls}-area--selected`} type={'shop-baocun'} size={'xxs'} />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </Popup>
    );
  }
}
