import React, {PureComponent} from 'react'
import {Toast,Button} from "@jdcfe/lrc-m"
import Page from "../../components/Page";
import WhiteSpace from "../../components/WhiteSpace";

export default class Demo extends PureComponent {

  render() {
    return (
      <Page title="Toast">
        <WhiteSpace/>
        <Button onClick={() =>{ Toast.show('This is a toast tips !!!')}}>显示</Button>
        <WhiteSpace/>
        <Button onClick={() =>{ Toast.fail('失败')}}>显示 fail</Button>
        <WhiteSpace/>
        <Button onClick={() =>{ Toast.success('成功')}}>显示 success</Button>
        <WhiteSpace/>
        <Button onClick={() =>{ Toast.loading('loading')}}>显示loading</Button>
        <WhiteSpace/>
      </Page>
    );
  }
}
