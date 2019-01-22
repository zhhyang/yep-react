/**
 * Created by zhaohongyang1 on 18-4-26.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
export default class Mask extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    /**
     * Whather mask should be transparent (no color)
     *
     */
    transparent: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'Yep-mask',
    transparent: false,
  };

  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  onPreventDefault = e => {
    e.preventDefault();
  };

  destroy() {
    // Use regex to prevent matching `mask-open` as part of a different class, e.g. `my-mask-opened`
    const classes = document.body.className.replace(/(^| )mask-open( |$)/, ' ');
    document.body.className = classNames(classes).trim();
    document.removeEventListener('touchmove', this.onPreventDefault);
  }

  show() {
    const classes = document.body.className;
    document.body.className = classNames(classes, 'mask-open');
    document.addEventListener('touchmove', this.onPreventDefault, {passive: false});
  }

  componentDidMount() {
    this.show();
  }

  componentWillUnmount() {
    this.destroy();
  }
  render() {
    const {transparent, className, prefixCls, ...others} = this.props;
    const clz = classNames(
      {
        [prefixCls]: !transparent,
        [`${prefixCls}_transparent`]: transparent,
      },
      className
    );

    return <div className={clz} {...others} />;
  }
}
