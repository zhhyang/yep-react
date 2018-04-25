import React, {PureComponent} from 'react'

import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

export default class Page extends PureComponent {


  static propTypes = {
    title:PropTypes.string,
  }

  render() {
    const {title, children} = this.props
    return (
      <main>
        <Helmet title={title} />
        <div>
          <div className="page">
            <h1 className="page-title">
              <span>{title}</span>
              <Link className="page-back router-link-active" to="/">
                返回
                <i className="Yepui Yepui-back"/>
              </Link>
            </h1>
            <div className="page-wrapper">
              {children}
            </div>
          </div>
        </div>
      </main>
    )
  }
}
