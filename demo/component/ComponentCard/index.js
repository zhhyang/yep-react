import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class ComponentCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {};

  constructor() {
    super();
  }

  render() {
    return (
      <div className="componentCardContainer">
        <div className="componentCardTitleContainer">
          <span className="tag" />
          <h6 className="content">{this.props.title}</h6>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default ComponentCard;
