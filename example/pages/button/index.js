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
        <Button size="md" style={{backgroundColor: '#2A83E1', color: '#FFFFFF', border: 0}}>下一步，上传医师认证相关证书</Button>
        <WhiteSpace/>
        <Button inline>inline</Button>
        <WhiteSpace/>
        <Button submit>Submit</Button>
        <WhiteSpace/>
        <ButtonGroup>
          <Button>确定</Button>
          <Button type="primary">取消</Button>
        </ButtonGroup>
      </Page>
    );
  }
}
