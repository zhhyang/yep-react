import React from 'react';
import {Link} from 'react-router-dom';
import {toCamelCase} from './utils';
import classNames from 'classnames'

export default class Panel extends React.Component{

  state = {
    open: true,
  };

  onClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const {components,category,location} = this.props;
    const isActive = Object.keys(components).includes(location.pathname.split('/').reverse()[0]) && components[location.pathname.split('/').reverse()[0]].category===category.name
    return (
      <li className={`nav-item${this.state.open ? ' nav-open' : ''}`}>
        <div className="nav-title" onClick={this.onClick} onKeyDown={() => {}} role="menu" tabIndex="-1">
          <span className={classNames({'nav-title-active':isActive})}>{category.label}</span>
          <i />
        </div>
        <div className="nav-group">
          <ul>
            {Object.keys(components)
              .filter(componentName => components[componentName].category === category.name)
              .map(componentName => {
                const component = components[componentName];

                return (
                  <li
                    className={`nav-item ${
                      location.pathname.split('/').reverse()[0] === componentName ? 'nav-on' : ''
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
    )
  }
}
