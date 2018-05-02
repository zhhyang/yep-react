import React, {PureComponent} from 'react'
import {ProgressBar} from "@jdcfe/lrc-m"
import Page from "../../components/Page";
import WhiteSpace from "../../components/WhiteSpace";

export default class Demo extends PureComponent {



  render() {
    return (
      <Page title="ProgressBar">
        <WhiteSpace/>
        <ProgressBar percent={150}/>
        <WhiteSpace/>

      </Page>
    );
  }
}
