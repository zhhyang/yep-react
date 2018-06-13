import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import Popover from '../_shared/Popover';
import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';

class Dropdown extends PureComponent {
  constructor(props) {
    super();
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
    const {children, disabled, aligned} = this.props;
    const {open} = this.state;

    let toggle, menu;
    React.Children.forEach(children, child => {
      if (child.type === DropdownToggle) {
        toggle = child;
      } else if (child.type === DropdownMenu) {
        menu = child;
      }
    });

    const {right, ...menuProps} = menu.props;
    if (right) {
      menuProps.align = 'right';
    }

    return (
      <Popover
        triggerMode="click"
        open={open}
        onToggle={this.handleToggle.bind(this)}
        content={menuProps.children}
        disabled={disabled}
        aligned={aligned}
        {...menuProps}
      >
        {React.cloneElement(toggle, {open})}
      </Popover>
    );
  }
}


export default Dropdown;
