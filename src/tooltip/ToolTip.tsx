import * as React from 'react';
import Popover from '../popover';
import ToolTipToggle from './ToolTipToggle';
export interface DropdownProps {
  // 是否展开
  open?: boolean;

  // 切换 open 状态后的回调，参数为切换后的 open 状态
  onToggle?: (open: boolean) => void;

  // 是否禁用
  disabled?: boolean;

  // DropdownToggle 与 DropdownMenu 宽度相同
  aligned?: boolean;

  // 展开方向，默认 `down`，如果实际空间不足，则可能自适应改变方向
  direction?: 'up' | 'down' | 'left' | 'right';

  // 对齐方式，默认 `left`
  align?: 'top' | 'right' | 'bottom' | 'left' | 'middle';

  // 是否右对齐，建议用 `align="right"` 代替
  right?: boolean;

  overlay: React.ReactNode;
}
class ToolTip extends React.PureComponent<DropdownProps, any> {
  constructor(props: DropdownProps) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      open: props.open || false,
    };
  }

  static defaultProps = {
    direction: 'down',
    align: 'left',
  };

  componentWillReceiveProps(nextProps: any) {
    'open' in nextProps && this.setState({open: nextProps.open});
  }

  open() {
    this.setState({open: true});
  }

  close() {
    this.setState({open: false});
  }

  handleToggle(open: boolean) {
    this.setState({open});
    this.props.onToggle && this.props.onToggle(open);
  }

  render() {
    const {children, disabled, aligned, overlay, ...restProps} = this.props;
    const {open} = this.state;

    return (
      <Popover
        triggerMode="click"
        open={open}
        onToggle={this.handleToggle}
        content={overlay}
        disabled={disabled}
        aligned={aligned}
        {...restProps}
      >
        <ToolTipToggle open={open}>{children}</ToolTipToggle>
      </Popover>
    );
  }
}

export default ToolTip;
