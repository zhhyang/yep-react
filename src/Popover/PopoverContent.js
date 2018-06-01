import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import classlist from 'classlist';
import CoordinateFactory from './CoordinateFactory';

class PopoverContent extends PureComponent {
  getChildContext() {
    return {
      popoverContent: this,
    };
  }

  componentDidMount() {
    this.setPosition();
  }

  componentDidUpdate() {
    this.setPosition();
  }

  setPosition() {
    const {triggerNode, direction, align} = this.props;
    const rootNode = ReactDOM.findDOMNode(this);
    rootNode.style.display = 'block';

    // Prevent accumulation
    if (this.positionClassNames) {
      classlist(rootNode).remove(...this.positionClassNames.split(' '));
    }
    const [computedDirection, computedAlign] = CoordinateFactory(triggerNode, rootNode, direction, align);
    this.positionClassNames = classnames({
      [`Yep-popover--${computedDirection}`]: true,
      [`Yep-popover--align-${computedAlign}`]: !!computedAlign,
    });
    classlist(rootNode).add(this.positionClassNames);
  }

  render() {
    const {children, className, triggerNode, triggerMode, direction, align, ...other} = this.props;
    return (
      <div
        className={classnames(
          'Yep-popover',
          {
            'Yep-popover--animation': triggerMode === 'hover',
          },
          className
        )}
        {...other}
      >
        <div className="Yep-popover__content">{children}</div>
      </div>
    );
  }
}

PopoverContent.childContextTypes = {
  popoverContent: PropTypes.instanceOf(PopoverContent),
};

export default PopoverContent;
