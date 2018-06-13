import React , { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from './../input'

export default class InputList extends PureComponent{

  constructor(){
    super()
  }


  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
  }

  static defaultProps = {
    prefixCls: 'Yep-input-list',
    style: {},
  }



  render(){

    return (
      <div>
        <div class=""><label htmlFor="">标题文字</label><Input/></div>
      </div>
    )
  }
}
