import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import allDocData from './allDocData';
import {website} from '../config';
import Panel from './Panel';
import {CATEGORIES} from '../../demo/utils'
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
          <a className="l-logo" href={`//${website}`}>
            <img src="http://yep.jd.com/index/1.0.0/img/logo.de07a48.png" alt="Yep-React" />
            <span>Yep-React</span>
          </a>
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
          {
            CATEGORIES.map((category,index) =>
                <Panel key={index} category={category} components={allDocData.components} location={this.props.location} />
            )
          }
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
