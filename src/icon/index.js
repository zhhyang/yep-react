import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Icon extends PureComponent {

  static propTypes = {
    /**
     * icon的type
     */
    type: PropTypes.string.isRequired,
    prefixCls:PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    prefixCls: 'Yep_icon',
    style:{},
  };

  render(){

    const {className,style,prefixCls,type} = this.props;
    const cls = classNames(prefixCls,className,{
      [`${type}`]:!!type,
    });
    return(
      <i className={cls} style={style}/>
    )
  }

}
