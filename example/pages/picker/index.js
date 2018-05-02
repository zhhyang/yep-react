import React, {PureComponent} from 'react'
import {Picker, Button} from "@jdcfe/lrc-m"
import Page from "../../components/Page";
import WhiteSpace from "../../components/WhiteSpace";

export default class Demo extends PureComponent {

  constructor() {
    super()
    this.handleToggleShow = this.handleToggleShow.bind(this)
    this.handleToggleSlideDownShow = this.handleToggleSlideDownShow.bind(this)
    this.handleToggleSlideRightShow = this.handleToggleSlideRightShow.bind(this)
    this.state = {
      show: false,
    }
  }

  handleToggleShow() {
    this.setState({
      show: !this.state.show
    })
  }

  handleToggleSlideDownShow() {
    this.setState({
      slideDownShow: !this.state.slideDownShow
    })
  }

  handleToggleSlideRightShow() {
    this.setState({
      slideRightShow: !this.state.slideRightShow
    })
  }


  render() {
    return (
      <Page title="Picker">
        <WhiteSpace/>
        <Button type="primary" onClick={this.handleToggleShow}>显示</Button>
        <WhiteSpace/>
        <Button onClick={this.handleToggleSlideDownShow}>显示取消按钮</Button>
        <WhiteSpace/>
        <Button type="primary" onClick={this.handleToggleSlideRightShow}>婚姻状况</Button>
        <WhiteSpace/>
        <Picker
          show={this.state.show}
          onCancel={this.handleToggleShow}
          onOk={(value) => {
            this.handleToggleShow()
            alert(value)
          }}
          data={['住院医师', '主治医师', '副主任医师', '主任医师']}
        />

        <Picker
          show={this.state.slideDownShow}
          onCancel={this.handleToggleSlideDownShow}
          hasCancel
          space
          data={['未婚', '已婚', '离异']}
          defaultSelectedValue="已婚"
          onOk={(value) => {
            alert(value)
            this.handleToggleSlideDownShow()
          }}
        />
        <Picker
          show={this.state.slideRightShow}
          onCancel={this.handleToggleSlideRightShow}
          hasCancel
          space
          title="婚姻状况"
          data={['未婚', '已婚', '离异']}
          onOk={(value) => {
            alert(value)
            this.handleToggleSlideRightShow()
          }
          }
        />
      </Page>
    );
  }
}
