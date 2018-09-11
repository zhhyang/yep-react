import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import Popover from '../_shared/Popover';
import DropdownToggle from './DropdownToggle';

class Dropdown extends PureComponent {
  constructor(props) {
    super();
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      open: props.open || false,
    };
  }

  static propTypes = {
    // 是否展开
    open: PropTypes.bool,

    // 切换 open 状态后的回调，参数为切换后的 open 状态
    onToggle: PropTypes.func,

    // 是否禁用
    disabled: PropTypes.bool,

    // DropdownToggle 与 DropdownMenu 宽度相同
    aligned: PropTypes.bool,

    // 展开方向，默认 `down`，如果实际空间不足，则可能自适应改变方向
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),

    // 对齐方式，默认 `left`
    align: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'middle']),

    // 是否右对齐，建议用 `align="right"` 代替
    right: PropTypes.bool,

    overlay: PropTypes.node.isRequired,
  };

  static defaultProps = {
    direction: 'down',
    align: 'left',
  };

  componentWillReceiveProps(nextProps) {
    'open' in nextProps && this.setState({open: nextProps.open});
  }

  open() {
    this.setState({open: true});
  }

  close() {
    this.setState({open: false});
  }

  handleToggle(open) {
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
        <DropdownToggle open={open}>{children}</DropdownToggle>
      </Popover>
    );
  }
}

export default Dropdown;
