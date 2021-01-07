import * as React from 'react';
import classNames from 'classnames';
export interface LoadingProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  loadingImg: string;
}
export default class Loading extends React.PureComponent<LoadingProps, any> {
  el: HTMLDivElement;

  static defaultProps = {
    prefixCls: 'Yep-loading',
    style: {},
    loadingImg:
      'https://img13.360buyimg.com/imagetools/jfs/t1/151010/32/14284/30214/5ff66791Ea1bc6cc6/698c0772b377aef5.png',
  };

  componentDidMount(): void {}

  render() {
    const {prefixCls, className, style, loadingImg} = this.props;
    const cls = classNames(prefixCls, className);
    return (
      <div className={cls} style={style} ref={(el: HTMLDivElement) => (this.el = el)}>
        <img src={loadingImg} />
      </div>
    );
  }
}
