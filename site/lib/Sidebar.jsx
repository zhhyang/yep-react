import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import allDocData from './allDocData';

const Sidebar = props => (
  <div className="l-menu">
    <ul>
      {
        allDocData.docs.sort((p1, p2) => p1.order - p2.order).map(page => (
          <li className={`nav-item ${props.location.pathname.split('/').reverse()[0] === page.id ? 'nav-on' : ''}`} key={page.id}>
            <Link className="nav-link" to={`/doc/${page.id}`}>{page.title}</Link>
          </li>
        ))
      }
      <li className="nav-item">
        <span>组件</span>
        <div className="nav-group">
          <ul>
            {
              Object.keys(allDocData.components).sort().map((componentName) => {
                const component = allDocData.components[componentName];

                return (
                  <li className={`nav-item ${props.location.pathname.split('/').reverse()[0] === componentName ? 'nav-on' : ''}`} key={componentName}>
                    <Link className="nav-link" to={`/doc/component/${componentName}`}>{componentName} {component.title}</Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </li>
    </ul>
  </div>
);

Sidebar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Sidebar);
