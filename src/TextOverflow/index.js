import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Popover from '../Popover';
import './index.scss';
import '../Tooltip/index.scss';

class TextOverflow extends PureComponent {
  render() {
    const {children, className, ...other} = this.props;
    return (
      <Popover
        className={classnames('Yep-tooltip__popover', className)}
        content={children.props.children}
        shouldOpen={() => {
          if (!this.rootNode) {
            this.rootNode = ReactDOM.findDOMNode(this);
          }
          return this.rootNode.offsetWidth < this.rootNode.scrollWidth;
        }}
        {...other}
      >
        {React.cloneElement(children, {
          className: classnames(children.props.className, 'Yep-text-overflow'),
        })}
      </Popover>
    );
  }
}

TextOverflow.defaultProps = {
  direction: 'up',
  align: 'middle',
};

TextOverflow.propTypes = {
  children: PropTypes.element.isRequired,

  // 提示框位置方向，默认 `up`
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),

  // 提示框对齐方式，默认 `middle`
  align: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'middle']),
};

export default TextOverflow;
