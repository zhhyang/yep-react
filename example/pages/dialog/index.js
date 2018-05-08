import React, {PureComponent} from 'react'
import {Dialog, Button} from "@jdcfe/lrc-m"
import Page from "../../components/Page";
import WhiteSpace from "../../components/WhiteSpace";

export default class Demo extends PureComponent {

  state = {
    show:false,
  }

  render() {
    return (
      <Page title="Dialog">
        <Button onClick={() => {
          this.setState({show:true})
        }}>Dialog</Button>
        <WhiteSpace/>
        <Button onClick={() => {
          Dialog.confirm('标题', '确定要删除吗?')
        }}>Confirm</Button>
        <WhiteSpace/>
        <Button onClick={() => {
          Dialog.confirm('标题', '确定要删除吗?', [{text: '好的', onClick: () => console.log('好的')}])
        }}>Alert</Button>
        <WhiteSpace/>
        <Dialog show={this.state.show} maskCloseable onClose={()=>{this.setState({show:false})}}>
          <div className={`Yep-dialog-alert-content`}>123</div>
        </Dialog>
      </Page>
    );
  }
}
