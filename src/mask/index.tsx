/**
 * Created by zhaohongyang1 on 18-4-26.
 */
import * as React from 'react';
import classNames from 'classnames';
import fixMask from './fixMask';

export interface MaskProps {
  prefixCls?: string;
  className?: string;
  /**
   * Whather mask should be transparent (no color)
   *
   */
  transparent?: boolean;
}

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
export default class Mask extends React.PureComponent<MaskProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-mask',
    transparent: false,
  };

  destroy = () => {
    // Use regex to prevent matching `mask-open` as part of a different class, e.g. `my-mask-opened`
    const classes = document.body.className.replace(/(^| )mask-open( |$)/, ' ');
    document.body.className = classNames(classes).trim();
  };

  show = () => {
    const classes = document.body.className;
    document.body.className = classNames(classes, 'mask-open');
  };

  componentDidMount() {
    this.show();
    fixMask();
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
