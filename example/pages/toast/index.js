import React, {PureComponent} from 'react'
import {Toast,Button} from "@jdcfe/lrc-m"
import Page from "../../components/Page";
import WhiteSpace from "../../components/WhiteSpace";

export default class Demo extends PureComponent {

  render() {
    return (
      <Page title="Toast">
        <WhiteSpace/>
        <Button onClick={() =>{ Toast.show('123',)}}>显示</Button>
        <WhiteSpace/>
        <Button onClick={() =>{ Toast.show('234')}}>显示</Button>
        <WhiteSpace/>
        <Button onClick={() =>{ Toast.show('345')}}>显示</Button>
        <WhiteSpace/>
        <Button onClick={() =>{ Toast.show('456')}}>显示</Button>
        <WhiteSpace/>
      </Page>
    );
  }
}
