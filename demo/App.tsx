import React, {PureComponent} from 'react'
import allDocData from "./allDocData";
import {toCamelCase} from "../site/lib/utils";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import './index.scss'

export default class App extends PureComponent {


  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <section className="page-index">
        <Helmet title="Components"/>
        <div className="page-title">Yep-React</div>
        {
          Object.keys(allDocData.components).sort().map((componentName, index) => {
              const component = allDocData.components[componentName];
              return (
                <Link to={`/component/${componentName}`} key={index}>
                  <div>
                    <i className="indexicon"/>
                    <span>{toCamelCase(componentName)} {component.title}</span>
                    <s></s>
                  </div>
                </Link>
              )
            }
          )
        }
      </section>
    )
  }
}

