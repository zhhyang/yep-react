import React, {PureComponent} from 'react'
import {Switch} from "@jdcfe/lrc-m"
import {Link} from "react-router-dom";
import './index.scss'

export default class SwitchDemo extends PureComponent {

  render() {
    return (
      <main>
        <div>
          <div className="page">
            <h1 className="page-title">
              <span>Switch</span>
              <Link className="page-back router-link-active" to="/">
                返回
                <i className="Yepui Yepui-back"/>
              </Link>
            </h1>
            <div className="page-wrapper">
              <div className="demo-list">
                <div className="demo-list-body">
                  <div className="demo-list-item">
                    <div className="demo-list-line">
                      <div className="demo-list-content">Off</div>
                      <div className="demo-list-extra">
                        <Switch currentStatus={false}/>
                      </div>
                    </div>
                  </div>
                  <div className="demo-list-item">
                    <div className="demo-list-line">
                      <div className="demo-list-content">On</div>
                      <div className="demo-list-extra">
                        <Switch currentStatus/>
                      </div>
                    </div>
                  </div>
                  <div className="demo-list-item">
                    <div className="demo-list-line">
                      <div className="demo-list-content">Disabled On</div>
                      <div className="demo-list-extra">
                        <Switch currentStatus disabled/>
                      </div>
                    </div>
                  </div>
                  <div className="demo-list-item">
                    <div className="demo-list-line">
                      <div className="demo-list-content">Disabled Off</div>
                      <div className="demo-list-extra">
                        <Switch currentStatus={false} disabled/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
