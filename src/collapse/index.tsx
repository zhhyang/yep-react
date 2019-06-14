import * as React from 'react';
import classNames from 'classnames';

export interface CollapseProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 是否关闭折叠层
   */
  isOpen?: boolean;
  /**
   * 折叠内容
   */
  cont?: string;
  /**
   * 折叠标题
   */
  title?: string;
}

export default class Collapse extends React.PureComponent<CollapseProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-collapse',
    style: {},
    isOpen: false,
    cont: '我是折叠内容',
    title: '我是折叠面板标题',
  };

  constructor(props: CollapseProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const {prefixCls, cont, title, className} = this.props;
    const {isOpen} = this.state;
    const cls = classNames(className, prefixCls);
    return (
      <div className={cls}>
        <div onClick={() => this.handleToggle()} className={`${prefixCls}-title`}>
          <span>{title}</span>
          <i className={`${isOpen ? `${prefixCls}-show-arrow` : `${prefixCls}-hide-arrow`} ${prefixCls}-arrow`} />
        </div>
        <div className={`${isOpen ? `${prefixCls}-show` : `${prefixCls}-hide`} ${prefixCls}-cont`}>{cont}</div>
      </div>
    );
  }
}
