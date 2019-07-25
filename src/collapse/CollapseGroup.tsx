import * as React from 'react';
import classNames from 'classnames';

export interface CollapseGroupProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 折叠内容
   */
  children: React.ReactNode;
  /**
   * 指定默认展开的索引
   */
  defaultOpenIndex?: number;
}

export default class CollapseGroup extends React.PureComponent<CollapseGroupProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-collapses',
    style: {},
  };

  constructor(props: CollapseGroupProps) {
    super(props);
    this.state = {
      defaultOpenIndex: props.defaultOpenIndex,
    };
  }

  onToggle(isOpen: boolean, index: number) {
    this.setState({
      defaultOpenIndex: isOpen ? index : -1,
    });
  }

  render() {
    const {className, prefixCls, style} = this.props;
    const cls = classNames(className, prefixCls);
    const {defaultOpenIndex} = this.state;
    const children = React.Children.toArray(this.props.children);
    return (
      <div className={cls} style={style}>
        {children.map((item: any, index: number) =>
          React.cloneElement(item, {
            isOpen: index === defaultOpenIndex,
            onToggle: (isOpen: boolean) => this.onToggle(isOpen, index),
          })
        )}
      </div>
    );
  }
}
