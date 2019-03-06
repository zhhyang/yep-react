import React , { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Steps extends PureComponent{
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
  }
  
  static defaultProps = {
    prefixCls: 'Yep-steps',
    style: {},
  }
  
  constructor(){
    super()
  }
  
  render(){
    
    return (
      <div>
      
      </div>
    )
  }
}