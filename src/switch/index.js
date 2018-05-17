import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Switch extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    currentStatus: PropTypes.bool,
    handleSwitch: PropTypes.func,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'Yep-switch',
    style: {},
    currentStatus: false,
    disabled: false,
    handleSwitch: () => {},
  };

  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.state = {
      switchOn: props.currentStatus,
    };
  }

  handleSwitch() {
    const {handleSwitch} = this.props;
    const nextSwitchOn = !this.state.switchOn;
    this.setState({
      switchOn: nextSwitchOn,
    });
    handleSwitch(nextSwitchOn);
  }

  render() {
    const {disabled, prefixCls, className, style} = this.props;
    const wrapperCls = classNames(`${prefixCls}-wrapper`, className, {
      open: this.state.switchOn,
      close: !this.state.switchOn,
      disabled: disabled,
    });
    const innerCls = classNames('switch-inner', {
      open: this.state.switchOn,
      close: !this.state.switchOn,
    });

    return (
      <div className={wrapperCls} style={style} {...(!disabled ? {onClick: this.handleSwitch} : {})}>
        <div className={innerCls} />
      </div>
    );
  }
}
