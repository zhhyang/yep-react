import React, {PureComponent} from 'react'
import {Icon} from "@jdcfe/lrc-m"
import Page from "../../components/Page";
import WhiteSpace from "../../components/WhiteSpace";

export default class Demo extends PureComponent {

  render() {
    return (
      <Page title="Icon">
        <WhiteSpace/>
        <Icon type="add-circle"/>
        <Icon type="arrow-down-hollow"/>
        <Icon type="arrow-back "/>
        <Icon type="add"/>
        <WhiteSpace/>
      </Page>
    );
  }
}
