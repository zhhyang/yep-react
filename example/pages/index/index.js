import React, {PureComponent} from 'react'
import navs from '../../routes/nav.config'
import {Link} from "react-router-dom";
import './index.scss'
import {Helmet} from "react-helmet";

export default class Index extends PureComponent {

  render() {
    return (
      <section className="page-index">
        <Helmet title="Components" />
        {
          navs.map((group, index) =>
            <div key={index}>
              <div className="page-title">{group.title}</div>
              {
                group.list.map((item, key) =>
                  <Link to={item.path} key={key}>
                    <div>
                      <i className="indexicon"/>
                      <span>{item.name}</span>
                      <s></s>
                    </div>
                  </Link>
                )
              }
            </div>
          )
        }
      </section>
    )
  }
}
