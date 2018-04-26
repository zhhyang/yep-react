import React, {PureComponent} from 'react'
import {Popup, Button} from "@jdcfe/lrc-m"
import Page from "../../components/Page";
import WhiteSpace from "../../components/WhiteSpace";
import './index.scss'
export default class Demo extends PureComponent {

  constructor() {
    super()
    this.handleToggleShow = this.handleToggleShow.bind(this)
    this.state = {
      show: false
    }
  }

  handleToggleShow() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <Page title="Popup">
        <WhiteSpace/>
        <Button type="primary" onClick={this.handleToggleShow}>显示</Button>
        <WhiteSpace/>
        <Popup show={this.state.show} onCancel={this.handleToggleShow}>
          <div className="ul">
            <div className="cur" onClick={() => {alert('未婚')}}>未婚</div>
            <div className="" onClick={() => {alert('已婚')}}>已婚</div>
            <div className="" onClick={() => {alert('离异')}}>离异</div>
          </div>
        </Popup>
        <WhiteSpace/>
      </Page>
    );
  }
}
