import * as React from 'react';
import classNames from 'classnames';
import noop from '../_utils/noop';
import Gesture from '../gesture';
import {getPxStyle, getTransformPropValue, setPxStyle} from '../_utils/styleUtil';
export interface TabsBarProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  activeTab: number;
  renderTab: (t: any) => React.ReactNode;
  onTabClick?: (index: number) => void;
  children: ItemProps[];
  tabBarTextStyle?: React.CSSProperties;
  tabBarActiveTextColor?: string;
  tabBarInactiveTextColor?: string;
  sticky?: boolean;
}
export type Tab = {
  title: string;
};

const Item: React.FunctionComponent<ItemProps> = () => null;

export interface ItemProps {
  tab: any;
}

export interface TabsBarState {
  activeTab: number;
  isMoving?: boolean;
  showPrev?: boolean;
  showNext?: boolean;
  transform?: string;
}
export default class TabsBar extends React.PureComponent<TabsBarProps, TabsBarState> {
  static defaultProps = {
    prefixCls: 'Yep-tabs-bar',
    onTabClick: noop,
    activeTab: 0,
  };
  layout: HTMLDivElement;
  underline: HTMLDivElement;
  [key: string]: any;

  static Item = Item;

  constructor(props: TabsBarProps) {
    super(props);
    this.state = {
      activeTab: props.activeTab,
      isMoving: false,
      showPrev: false,
      showNext: false,
      transform: '',
    };
  }

  componentDidMount() {
    this.underline.style.width = this[`t_${this.props.activeTab}`]?.clientWidth + 'px';
    if (this.layout.scrollWidth > this.layout.clientWidth) {
      this.setState({
        showNext: true,
      });
    }
  }

  componentDidUpdate(prevProps: Readonly<TabsBarProps>, prevState: Readonly<TabsBarState>) {
    if (
      this.state.activeTab !== prevState.activeTab ||
      React.Children.count(this.props.children) !== React.Children.count(prevProps.children)
    ) {
      this.getTransformByIndex();
    }
  }

  getTransformByIndex = () => {
    const {activeTab} = this.state;
    const nextEl = this[`t_${activeTab}`];
    const nextLeft = nextEl?.offsetLeft || 0;
    if (nextLeft > this.layout.clientWidth / 2) {
      const canScrollOffset = this.layout.scrollWidth - this.layout.clientWidth;
      const toScroll = nextLeft - this.layout.clientWidth / 2 + nextEl?.clientWidth! / 2;
      const scroll = Math.min(canScrollOffset, toScroll);
      this.onPan.setCurrentOffset(`-${scroll}`);
      this.setState({
        transform: getPxStyle(-scroll, 'px', false),
        showPrev: scroll > 0,
        showNext: toScroll < canScrollOffset,
      });
    } else {
      this.setState({
        transform: getPxStyle(0, 'px', false),
        showPrev: false,
        showNext: true,
      });
    }
  };

  onClick = (index: number) => {
    const {onTabClick} = this.props;
    this.setState({
      activeTab: index,
    });
    onTabClick && onTabClick(index);
  };

  renderTab = (t: Tab, i: number) => {
    const {prefixCls, renderTab, tabBarTextStyle, tabBarActiveTextColor, tabBarInactiveTextColor} = this.props;
    const {activeTab} = this.state;

    const textStyle = {...tabBarTextStyle} as React.CSSProperties;
    let cls = `${prefixCls}-tab`;
    if (activeTab === i) {
      cls += ` ${cls}-active`;
      if (tabBarActiveTextColor) {
        textStyle.color = tabBarActiveTextColor;
      }
    } else if (tabBarInactiveTextColor) {
      textStyle.color = tabBarInactiveTextColor;
    }

    return (
      <div
        ref={div => (this[`t_${i}`] = div)}
        id={`t_${i}`}
        key={`t_${i}`}
        style={{
          ...textStyle,
        }}
        className={cls}
        onClick={() => this.onClick(i)}
      >
        {renderTab ? renderTab(t) : t.title}
      </div>
    );
  };

  onPan = (() => {
    let lastOffset: number | string = 0;
    let finalOffset = 0;

    const getLastOffset = (isVertical = false) => {
      let offset = +`${lastOffset}`.replace('%', '');
      if (`${lastOffset}`.indexOf('%') >= 0) {
        offset /= 100;
        offset *= isVertical ? this.layout.clientHeight : this.layout.clientWidth;
      }
      return offset;
    };

    return {
      onPanStart: () => {
        this.setState({isMoving: true});
        console.log(this.layout.scrollWidth);
      },

      onPanMove: (status: any) => {
        if (!status.moveStatus || !this.layout) return;
        const isVertical = false;
        let offset = getLastOffset() + (isVertical ? status.moveStatus.y : status.moveStatus.x);
        const canScrollOffset = isVertical
          ? -this.layout.scrollHeight + this.layout.clientHeight
          : -this.layout.scrollWidth + this.layout.clientWidth;
        offset = Math.min(offset, 0);
        offset = Math.max(offset, canScrollOffset);
        setPxStyle(this.layout, offset, 'px', isVertical);
        finalOffset = offset;

        this.setState({
          showPrev: -offset > 0,
          showNext: offset > canScrollOffset,
        });
      },

      onPanEnd: () => {
        const isVertical = false;
        lastOffset = finalOffset;
        this.setState({
          isMoving: false,
          transform: getPxStyle(finalOffset, 'px', isVertical),
        });
      },

      setCurrentOffset: (offset: number | string) => (lastOffset = offset),
    };
  })();

  render() {
    const {prefixCls, children, className, style, sticky} = this.props;
    const {transform, activeTab, isMoving, showPrev, showNext} = this.state;
    const cls = classNames(prefixCls, className, {
      [` ${prefixCls}-animated`]: !isMoving,
    });
    const tabs = React.Children.map(children, (child: any, index) => {
      return {
        title: child.props.tab,
        key: index,
      } as Tab;
    });
    const {setCurrentOffset, ...onPan} = this.onPan;

    const transformStyle = {
      ...getTransformPropValue(transform),
    };
    return (
      <div
        style={style}
        className={classNames(`${prefixCls}-wrap`, {
          [`${prefixCls}-sticky`]: sticky,
        })}
      >
        <div className={cls}>
          {showPrev && <div className={`${prefixCls}-prevpage`} />}
          <Gesture {...onPan} direction={'horizontal'}>
            <div
              ref={div => (this.layout = div as HTMLDivElement)}
              style={transformStyle}
              className={`${prefixCls}-content`}
            >
              {tabs.map((t: Tab, i: number) => {
                return this.renderTab(t, i);
              })}
              <div
                ref={div => (this.underline = div as HTMLDivElement)}
                className={`${prefixCls}-underline`}
                style={{
                  left: this[`t_${activeTab}`]?.offsetLeft || 0,
                  width: this[`t_${activeTab}`]?.clientWidth,
                }}
              >
                <div className={`${prefixCls}-underline-bar`} />
              </div>
            </div>
          </Gesture>
          {showNext && <div className={`${prefixCls}-nextpage`} />}
        </div>
      </div>
    );
  }
}
