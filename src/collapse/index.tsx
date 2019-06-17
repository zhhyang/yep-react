import * as React from 'react';
import classNames from 'classnames';
import Icon from '../icon';

export interface CollapseProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 是否关闭折叠层
   */
  isOpen?: boolean;
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
  };

  constructor(props: CollapseProps) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
    };
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const {prefixCls, title, className, children} = this.props;
    const {isOpen} = this.state;
    const cls = classNames(className, prefixCls);
    return (
      <div className={cls}>
        <div className={`${prefixCls}-title`}>
          <span>{title}</span>
          <Icon
            type={'arrow-down-hollow'}
            size={'xxs'}
            className={`${isOpen ? `${prefixCls}-show-arrow` : `${prefixCls}-hide-arrow`} ${prefixCls}-arrow`}
            onClick={() => this.handleToggle()}
          />
        </div>
        <div className={`${isOpen ? `${prefixCls}-show` : `${prefixCls}-hide`} ${prefixCls}-cont`}>{children}</div>
      </div>
    );
  }
}
