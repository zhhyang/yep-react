import React, {PureComponent} from 'react'
import {Checkbox} from "@jdcfe/lrc-m"
import Page from "../../components/Page";

export default class CheckBoxDemo extends PureComponent {

  render() {
    return (
      <Page title="Checkbox">
        <div className="demo-list">
          <div className="demo-list-header">晚饭吃什么？</div>
          <div className="demo-list-body">
            <div className="demo-list-item">
              <div className="demo-list-line">
                <div className="demo-list-content">
                  <Checkbox >鱼</Checkbox>
                </div>
              </div>
            </div>
            <div className="demo-list-item">
              <div className="demo-list-line">
                <div className="demo-list-content">
                  <Checkbox disabled>肉</Checkbox>
                </div>
              </div>
            </div>
            <div className="demo-list-item">
              <div className="demo-list-line">
                <div className="demo-list-content">
                  <Checkbox defaultChecked>小龙虾</Checkbox>
                </div>
              </div>
            </div>
            <div className="demo-list-item">
              <div className="demo-list-line">
                <div className="demo-list-content">
                  <Checkbox checked>哈啤酒</Checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
