import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

class ComponentTitle extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    englishTitle: PropTypes.string,
  };

  static defaultProps = {
    title: '组件',
    englishTitle: 'Component',
    desc: '1',
  };

  constructor() {
    super();
  }

  render() {
    const {title, englishTitle, desc} = this.props;
    return (
      <div className={style.componentTitleContainer}>
        <h6 className={style.title}>{title}</h6>
        <p className={style.desc}>{englishTitle}</p>
        <p className={style.desc}>{desc}</p>
      </div>
    );
  }
}

export default ComponentTitle;
