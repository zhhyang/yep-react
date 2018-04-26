import React, {PureComponent} from 'react'
import {Button} from "@jdcfe/lrc-m"
const {ButtonGroup} = Button
import Page from "../../components/Page";
import WhiteSpace from "../../components/WhiteSpace";

export default class ButtonDemo extends PureComponent {

  render() {
    return (
      <Page title="Button">
        <WhiteSpace/>
        <Button>default</Button>
        <WhiteSpace/>
        <Button disabled>default disabled</Button>
        <WhiteSpace/>
        <Button type="primary">primary</Button>
        <WhiteSpace/>
        <Button type="primary">primary disabled</Button>
        <WhiteSpace/>
        <Button inline>inline</Button>
        <WhiteSpace/>
        <ButtonGroup>
          <Button>确定</Button>
          <Button type="primary">取消</Button>
        </ButtonGroup>
      </Page>
    );
  }
}
