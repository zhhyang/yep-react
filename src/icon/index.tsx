import * as React from 'react';
import classNames from 'classnames';
import loadSprite from './loadSprite';

export interface IconProps {
  /**
   * icon的type
   */
  type: string;
  className?: string;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  color?: string;
  onClick?: () => void;
}

export default class Icon extends React.PureComponent<IconProps, any> {
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
