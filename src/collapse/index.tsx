import * as React from 'react';
import classNames from 'classnames';
import DownOutlined from '@jdcfe/icons-react/DownOutlined';
import CollapseGroup from './CollapseGroup';

export interface CollapseProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 是否关闭折叠层
   */
  isOpen: boolean;
  /**
   * 折叠标题
   */
  title: string;
  /**
   * 折叠内容
   */
  children: any;
  onToggle?: (isOpen: boolean) => {};
}

export interface CollapseState {
  isOpen: boolean;
}

export default class Collapse extends React.PureComponent<CollapseProps, CollapseState> {
  static CollapseGroup = CollapseGroup;

  static defaultProps = {
    prefixCls: 'Yep-collapse',
    style: {},
    isOpen: false,
  };

  constructor(props: CollapseProps) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
    };
  }

  handleToggle = () => {
    this.setState(
      {
        isOpen: !this.state.isOpen,
      },
      () => {
        this.props.onToggle && this.props.onToggle(this.state.isOpen);
      }
    );
  };

  UNSAFE_componentWillReceiveProps(nextProps: CollapseProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      this.setState({
        isOpen: nextProps.isOpen,
      });
    }
  }

  render() {
    const {prefixCls, title, className, children, style} = this.props;
    const {isOpen} = this.state;
    const cls = classNames(className, prefixCls);
    return (
      <div className={cls} style={style}>
        <div className={`${prefixCls}-title`} onClick={this.handleToggle}>
          <span>{title}</span>
          <DownOutlined
            className={`${
              isOpen ? `${prefixCls}-show-arrow` : `${prefixCls}-hide-arrow`
            } ${prefixCls}-arrow Yep-icon-xxs`}
          />
        </div>
        <div className={`${isOpen ? `${prefixCls}-show` : `${prefixCls}-hide`} ${prefixCls}-cont`}>{children}</div>
      </div>
    );
  }
}

Collapse.CollapseGroup = CollapseGroup;
