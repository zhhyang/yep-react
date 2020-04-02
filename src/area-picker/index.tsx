import * as React from 'react';
import classNames from 'classnames';
import Popup from '../popup';
import Icon from '@jdcfe/yep-icons';
import CheckOutlined from '@jdcfe/yep-icons/CheckOutlined';
import Tabs from '../tabs';
import TabBar from './TabBar';
import CloseO from '../icon/svgs/CloseO';
const {TabPanel} = Tabs;

export interface Data {}

export interface AreaPickerProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  show: boolean;
  maskCloseable?: boolean;
  title?: string;
  initialData: Data[];
  onOk: (data: any) => void;
  onCancel: () => void;
  fetchAction: (item: any, index: number) => Promise<any>;
  distanceToChangeTab?: number;
  keyExtractor: (item: any, index?: number) => any;
  nameExtractor: (item: any, index?: number) => any;
  chooseLabel: string;
  selected: [];
}

export default class AreaPicker extends React.PureComponent<AreaPickerProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-area-picker',
    title: '配送至',
    chooseLabel: '请选择',
    style: {},
    show: false,
    maskCloseable: false,
    distanceToChangeTab: 10,
    keyExtractor: (item: any) => item.id,
    nameExtractor: (item: any) => item.name,
    selected: [],
  };

  tabs: Tabs;

  constructor(props: AreaPickerProps) {
    super(props);
    this.state = {
      tabs: [],
      data: [props.initialData],
      defaultIndex: 0,
    };
  }

  onClick = (city: any, index: number) => {
    const {fetchAction, onOk, keyExtractor} = this.props;
    const {tabs, data} = this.state;
    const id = keyExtractor(city, index);
    let tempTabs = tabs;
    const tempData = data;
    if (tempTabs[index]) {
      tempTabs.splice(index);
    }
    tempData.splice(index + 1);
    if (tabs.filter((tab: any, i: number) => keyExtractor(tab, i) === id).length === 0) {
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

  componentDidMount() {
    const {selected, fetchAction, initialData} = this.props;
    if (selected.length > 0) {
      Promise.all(selected.map((city, index) => fetchAction(city, index))).then(res => {
        this.setState({
          tabs: selected,
          data: [initialData].concat(res.filter(item => item.length > 0)),
          defaultIndex: selected.length - 1,
        });
      });
    }
  }

  render() {
    const {
      show,
      onCancel,
      prefixCls,
      className,
      style,
      title,
      maskCloseable,
      distanceToChangeTab,
      keyExtractor,
      nameExtractor,
      chooseLabel,
    } = this.props;
    const {data, tabs, defaultIndex} = this.state;
    const cls = classNames(prefixCls, className);

    return (
      <Popup show={show} onCancel={onCancel} maskCloseable={maskCloseable}>
        <div className={cls} style={style}>
          <div className={`${prefixCls}-title-wrapper`}>
            <h1 className={`${prefixCls}-title`}>{title}</h1>
            <Icon component={CloseO} className={`${prefixCls}-icon-close`} onClick={onCancel} />
          </div>

          <Tabs
            defaultIndex={defaultIndex}
            distanceToChangeTab={distanceToChangeTab}
            ref={ref => (this.tabs = ref as Tabs)}
            renderTabBar={props => <TabBar {...props} />}
          >
            {data.map((item: any, index: number) => (
              <TabPanel tab={(tabs[index] && nameExtractor(tabs[index])) || chooseLabel} key={index}>
                <div className={`${prefixCls}-content Yep-scroller`}>
                  <ul>
                    {item.map((city: any) => (
                      <li key={keyExtractor(city, index)} onClick={() => this.onClick(city, index)}>
                        {tabs[index] && keyExtractor(tabs[index]) === keyExtractor(city) && (
                          <CheckOutlined className={`${prefixCls}-area--selected`} />
                        )}
                        {nameExtractor(city)}
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
