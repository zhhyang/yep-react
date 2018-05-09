import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import allDocData from './allDocData';
import {toCamelCase} from "./utils";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="l-menu">
        <ul>
          {
            allDocData.docs.sort((p1, p2) => p1.order - p2.order).map(page => (
              <li
                className={`nav-item ${this.props.location.pathname.split('/').reverse()[0] === page.id ? 'nav-on' : ''}`}
                key={page.id}>
                <Link className="nav-link" to={`/doc/${page.id}`}>{page.title}</Link>
              </li>
            ))
          }
          <li className={`nav-item${this.state.isOpen ? ' nav-open' : ''}`}>
            <div className="nav-title" onClick={this.handleClick} onKeyDown={() => {
            }} role="menu" tabIndex="-1">
              <span>组件</span>
              <i/>
            </div>
            <div className="nav-group">
              <ul>
                {
                  Object.keys(allDocData.components).sort().map((componentName) => {
                    const component = allDocData.components[componentName];

                    return (
                      <li
                        className={`nav-item ${this.props.location.pathname.split('/').reverse()[0] === componentName ? 'nav-on' : ''}`}
                        key={componentName}>
                        <Link className="nav-link"
                              to={`/doc/component/${componentName}`}>{toCamelCase(componentName)} {component.title}</Link>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

Sidebar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Sidebar);
