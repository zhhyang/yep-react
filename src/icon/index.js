import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import loadSprite from './loadSprite';

export default class Icon extends PureComponent {
  static propTypes = {
    /**
     * icon的type
     */
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg']),
    color: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    size: 'md',
  };

  componentDidMount() {
    loadSprite();
  }

  render() {
    const {className, type, size, ...restProps} = this.props;
    const cls = classNames('Yep-icon', className, `Yep-icon-${type}`, `Yep-icon-${size}`);
    return (
      <svg className={cls} {...restProps}>
        <use xlinkHref={`#${type}`} />
      </svg>
    );
  }
}
