import * as React from 'react';

export interface CollapseGroupProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  /**
   * 指定默认展开的项
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
    const {defaultOpenIndex} = this.state;
    const children = React.Children.toArray(this.props.children);
    return (
      <div>
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
