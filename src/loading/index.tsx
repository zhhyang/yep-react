import * as React from 'react';
import classNames from 'classnames';
import lottie from 'lottie-web';
const loading = require('./loading.json');
export interface LoadingProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  animationData?: any;
  loop?: boolean | number;
  autoplay?: boolean;
  renderer?: 'svg' | 'canvas' | 'html';
}
export default class Loading extends React.PureComponent<LoadingProps, any> {
  el: HTMLDivElement;

  static defaultProps = {
    prefixCls: 'Yep-loading',
    style: {},
    animationData: loading,
    loop: true,
    autoplay: true,
    renderer: 'svg',
  };

  componentDidMount(): void {
    const {animationData, loop, autoplay, renderer} = this.props;
    lottie.loadAnimation({
      container: this.el,
      renderer,
      loop,
      autoplay,
      animationData,
    });
  }

  render() {
    const {prefixCls, className, style} = this.props;
    const cls = classNames(prefixCls, className);
    return <div className={cls} style={style} ref={(el: HTMLDivElement) => (this.el = el)} />;
  }
}
