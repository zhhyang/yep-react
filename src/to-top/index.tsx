import * as React from 'react';
import classNames from 'classnames';
import {omit} from 'lodash';
import {CSSTransition} from 'react-transition-group';
import * as raf from 'raf';
import noop from '../_utils/noop';
import Icon from '../icon';

const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return (cc / 2) * t * t * t + b;
  } else {
    return (cc / 2) * ((t -= 2) * t * t + 2) + b;
  }
};

export interface ToTopProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
  children: React.ReactNode;
  displayHeight: number;
  visible: boolean;
}

export interface State {
  visible: boolean;
}

export default class ToTop extends React.PureComponent<ToTopProps, State> {
  static defaultProps = {
    prefixCls: 'Yep-to-top',
    style: {},
    displayHeight: 0,
  };

  constructor(props: ToTopProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  static setScrollTop(parameters: {value: any}) {
    let value = parameters.value;
    const {documentElement} = document;
    document.body.scrollTop = value;
    if (documentElement) {
      documentElement.scrollTop = value;
    }
  }

  handleScroll = () => {
    const {displayHeight} = this.props;
    this.setState({
      visible: window.pageYOffset > displayHeight,
    });
  };

  scrollToTop = (e: any) => {
    const {documentElement} = document;
    const scrollTop =
      window.pageYOffset || document.body.scrollTop || (documentElement && documentElement.scrollTop) || 0;
    const startTime = Date.now();
    const frameFunc = () => {
      const timestamp = Date.now();
      const time = timestamp - startTime;
      ToTop.setScrollTop({value: easeInOutCubic(time, scrollTop, 0, 450)});
      if (time < 450) {
        raf(frameFunc);
      } else {
        ToTop.setScrollTop({value: 0});
      }
    };
    raf(frameFunc);
    (this.props.onClick || noop)(e);
  };

  render() {
    const {prefixCls, className = '', children, style} = this.props;
    const cls = classNames(prefixCls, className);
    const defaultElement = (
      <div className={`${prefixCls}-content`}>
        <Icon type="up" className={`${prefixCls}-icon`}/>
      </div>
    );
    const divProps = omit(this.props, ['prefixCls', 'className', 'children', 'displayHeight', 'visible']);
    const visible = 'visible' in this.props ? this.props.visible : this.state.visible;
    return (
      <CSSTransition in={visible} timeout={300} classNames={'fade'} unmountOnExit={true}>
        <div {...divProps} style={style} className={cls} onClick={this.scrollToTop}>
          {children || defaultElement}
        </div>
      </CSSTransition>
    );
  }
}
