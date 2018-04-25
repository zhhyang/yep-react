import React, {PureComponent} from 'react'
import {Radio} from "@jdcfe/lrc-m"
import Page from "../../components/Page";

export default class RadioDemo extends PureComponent {

  constructor() {
    super()

    this.state = {
      options1: ['Option1', 'Option2'],
      options2: [{
        label: 'Option1',
        value: '1'
      }, {
        label: 'Option2',
        value: '2',
        disabled: true,
      }, {
        label: 'Option3',
        value: '3',
      }]
    }
  }

  render() {
    return (
      <Page title="Radio">
        <div className="demo-list">
          <div className="demo-list-header">Radio demo</div>
          <div className="demo-list-body">
            <Radio options={this.state.options1} name="eat" />
          </div>
        </div>
        <div className="demo-list">
          <div className="demo-list-header">Radio horizontal demo</div>
          <div className="demo-list-body">
            <div style={{width:'5rem'}}>
              <Radio options={this.state.options2} checked="3" horizontal />
            </div>
          </div>
        </div>

      </Page>
    );
  }
}
