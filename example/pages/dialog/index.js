import React, {PureComponent} from 'react'
import {Dialog, Button} from "@jdcfe/lrc-m"
import Page from "../../components/Page";
import WhiteSpace from "../../components/WhiteSpace";

export default class Demo extends PureComponent {

  render() {
    return (
      <Page title="Dialog">
        <WhiteSpace/>
        <Button onClick={() => {
          Dialog.confirm('标题', '确定要删除吗?')
        }}>Confirm</Button>
        <WhiteSpace/>
        <Button onClick={() => {
          Dialog.confirm('标题', '确定要删除吗?', [{text: '好的', onClick: () => console.log('好的')}])
        }}>Alert</Button>
        <WhiteSpace/>
      </Page>
    );
  }
}
