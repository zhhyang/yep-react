import React from 'react';
import icon from './image';

class Icon extends React.Component {
  render() {
    const {type} = this.props;
    return (
      <div>
        <img src={icon.right} alt="" className={type == 'open_icon' ? 'active' : 0} />
      </div>
    );
  }
}

export default Icon;
