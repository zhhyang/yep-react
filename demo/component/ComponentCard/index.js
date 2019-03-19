import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

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
      <div className={style.componentCardContainer}>
        <div className={style.componentCardTitleContainer}>
          <span className={style.tag} />
          <h6 className={style.content}>{this.props.title}</h6>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default ComponentCard;
