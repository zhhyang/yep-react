import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import allDocData from './allDocData';
import {toCamelCase} from './utils';

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

  handleResetScrollStatus() {
    if (document.querySelector('.l-header').style.left == '') {
      document.querySelector('.l-header').style.left = '220px';
    } else if (document.querySelector('.l-header').style.left == '220px') {
      document.querySelector('.l-header').style.left = '';
    }
    if (
      document.querySelector('.l-menu').style.marginLeft == '' ||
      document.querySelector('.l-menu').style.marginLeft == '-220px'
    ) {
      document.querySelector('.l-menu').style.marginLeft = '0';
    } else if (document.querySelector('.l-menu').style.marginLeft == '0px') {
      document.querySelector('.l-menu').style.marginLeft = '-220px';
    }
  }

  render() {
    return (
      <div className="l-menu">
        <div style={{marginBottom: '20px'}}>
          <a className="l-logo" href="//jdf2e.github.io/yep-react/">
            <img src="http://yep.jd.com/index/1.0.0/img/logo.de07a48.png" alt="Yep-React" />
            <span>Yep-React</span>
          </a>
          <div style={{paddingLeft: '63px'}}>
            {' '}
            <span className="l-inspired">inspired by lrc</span>
          </div>
        </div>
        <ul>
          {allDocData.docs.sort((p1, p2) => p1.order - p2.order).map(page => (
            <li
              onClick={this.handleResetScrollStatus}
              className={`nav-item ${this.props.location.pathname.split('/').reverse()[0] === page.id ? 'nav-on' : ''}`}
              key={page.id}
            >
              <Link className="nav-link" to={`/doc/${page.id}`}>
                {page.title}
              </Link>
            </li>
          ))}
          <li className={`nav-item${this.state.isOpen ? ' nav-open' : ''}`}>
            <div className="nav-title" onClick={this.handleClick} onKeyDown={() => {}} role="menu" tabIndex="-1">
              <span>组件</span>
              <i />
            </div>
            <div className="nav-group">
              <ul>
                {Object.keys(allDocData.components)
                  .sort()
                  .map(componentName => {
                    const component = allDocData.components[componentName];

                    return (
                      <li
                        className={`nav-item ${
                          this.props.location.pathname.split('/').reverse()[0] === componentName ? 'nav-on' : ''
                        }`}
                        key={componentName}
                      >
                        <Link
                          className="nav-link"
                          title={`${toCamelCase(componentName)} ${component.title}`}
                          onClick={this.handleResetScrollStatus}
                          to={`/doc/component/${componentName}`}
                        >
                          {toCamelCase(componentName)} {component.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Sidebar);
