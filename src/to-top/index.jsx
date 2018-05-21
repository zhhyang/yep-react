import React , { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Gotop } from '@jdcfe/lrc';

export default class ToTop extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    smooth: PropTypes.bool,
    children: PropTypes.element,
    displayHeight: PropTypes.number,
    duration: PropTypes.number
  }
  
  static defaultProps = {
    prefixCls: 'Yep-to-top',
    style: {},
  }
  
  constructor() {
    super()
  }
  
  render() {
    const {prefixCls, className, style, onClick, smooth, children, displayHeight, duration} = this.props;
    const cls = classNames(prefixCls, className);
    
    return (
      <div>
        <br/><br/>
        <p>滚动至页面底部，查看右下角返回顶部按钮</p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p>滚动至页面底部，查看右下角返回顶部按钮</p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p>滚动至页面底部，查看右下角返回顶部按钮</p> 
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p>滚动至页面底部，查看右下角返回顶部按钮</p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p>滚动至页面底部，查看右下角返回顶部按钮</p> 
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p>滚动至页面底部，查看右下角返回顶部按钮</p>   
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p>滚动至页面底部，查看右下角返回顶部按钮</p>   
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>           
        <Gotop
          style={style}
          className={cls}
          onClick={onClick}
          smooth={smooth}
          children={children}
          displayHeight={displayHeight}
          duration={duration}
        >
        </Gotop>
      </div>
    )
  }
}