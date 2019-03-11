import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {Icon} from '@jdcfe/yep-react';
import {toCamelCase} from '../site/lib/utils';

class Panel extends React.Component {
  state = {
    open: false,
  };

  onClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const {category, components} = this.props;
    return (
      <div className="page-module-list__item--wrapper">
        <div className="page-module-list__item" onClick={this.onClick}>
          {/*<div className="page-module-list__icon">
          <div>
            <img src="" alt=""/>
          </div>
        </div>*/}
          <div className="page-module-list__info">{category.label}</div>
          <div className="page-module-list__arrow">
            <Icon type={this.state.open ? 'lego_shangjiantou' : 'lego_xiajiantou'} />
          </div>
        </div>
        <ul className={classNames({open: this.state.open})}>
          {Object.keys(components)
            .filter(componentName => components[componentName].category === category.name)
            .map((componentName, index) => {
              const component = components[componentName];
              return (
                <li key={index}>
                  <Link to={`/component/${componentName}`} key={index}>
                    <div>
                      <i className="indexicon" />
                      <span style={{color: '#6a6a77'}}>
                        {toCamelCase(componentName)} {component.title}
                      </span>
                      <s />
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Panel;
