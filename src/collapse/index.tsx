import * as React  from 'react';
  export interface CollapseProps {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
  }

export default class Collapse extends React.PureComponent<CollapseProps,any>{
  
  static defaultProps = {
    prefixCls: 'Yep-collapse',
    style: {},
  }
  
  constructor(props:CollapseProps){
    super(props)
  }
  
  render(){
    
    return (
      <div>
      
      </div>
    )
  }
}