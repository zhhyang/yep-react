import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Switch extends PureComponent {

  static propTypes = {
    currentStatus: PropTypes.bool,
    handleSwitch: PropTypes.func,
  }

  static defaultProps = {
    currentStatus: false,
    handleSwitch: () => {
    },
  }

  constructor(props) {
    super(props)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.state = {
      switchOn: props.currentStatus,
    }
  }

  handleSwitch() {
    const {handleSwitch} = this.props
    const nextSwitchOn = !this.state.switchOn
    this.setState({
      switchOn: nextSwitchOn
    })
    handleSwitch(nextSwitchOn)
  }

  render() {

    const wrapperCls = classNames(
      'Yep-switch-wrapper',
      {
        'open': this.state.switchOn,
        'close': !this.state.switchOn,
      })
    const innerCls = classNames(
      'switch-inner',
      {
        'open': this.state.switchOn,
        'close': !this.state.switchOn,
      })

    return (
      <div className={wrapperCls} onClick={this.handleSwitch}>
        <div className={innerCls}/>
      </div>
    );
  }
}
