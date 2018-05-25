import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

const Hammer = typeof window !== 'undefined' ? require('hammerjs') : undefined;

const privateProps = {
  children: true,
  direction: true,
  options: true,
  recognizeWith: true,
  vertical: true,
};

const handlerToEvent = {
  action: 'tap press',
  onDoubleTap: 'doubletap',
  onPan: 'pan',
  onPanCancel: 'pancancel',
  onPanEnd: 'panend',
  onPanStart: 'panstart',
  onPinch: 'pinch',
  onPinchCancel: 'pinchcancel',
  onPinchEnd: 'pinchend',
  onPinchIn: 'pinchin',
  onPinchOut: 'pinchout',
  onPinchStart: 'pinchstart',
  onPress: 'press',
  onPressUp: 'pressup',
  onRotate: 'rotate',
  onRotateCancel: 'rotatecancel',
  onRotateEnd: 'rotateend',
  onRotateMove: 'rotatemove',
  onRotateStart: 'rotatestart',
  onSwipe: 'swipe',
  onSwipeRight: 'swiperight',
  onSwipeLeft: 'swipeleft',
  onSwipeUp: 'swipeup',
  onSwipeDown: 'swipedown',
  onTap: 'tap',
};

Object.keys(handlerToEvent).forEach(function(i) {
  privateProps[i] = true;
});

function updateHammer(hammer, props) {
  if (props.hasOwnProperty('vertical')) {
    console.warn('vertical is deprecated, please use `direction` instead');
  }

  const directionProp = props.direction;
  if (directionProp || props.hasOwnProperty('vertical')) {
    const direction = directionProp ? directionProp : props.vertical ? 'DIRECTION_ALL' : 'DIRECTION_HORIZONTAL';
    hammer.get('pan').set({direction: Hammer[direction]});
    hammer.get('swipe').set({direction: Hammer[direction]});
  }

  if (props.options) {
    Object.keys(props.options).forEach(function(option) {
      if (option === 'recognizers') {
        Object.keys(props.options.recognizers).forEach(function(gesture) {
          const recognizer = hammer.get(gesture);
          recognizer.set(props.options.recognizers[gesture]);
          if (props.options.recognizers[gesture].requireFailure) {
            recognizer.requireFailure(props.options.recognizers[gesture].requireFailure);
          }
        }, this);
      } else {
        const key = option;
        const optionObj = {};
        optionObj[key] = props.options[option];
        hammer.set(optionObj);
      }
    }, this);
  }

  if (props.recognizeWith) {
    Object.keys(props.recognizeWith).forEach(function(gesture) {
      const recognizer = hammer.get(gesture);
      recognizer.recognizeWith(props.recognizeWith[gesture]);
    }, this);
  }

  Object.keys(props).forEach(function(p) {
    const e = handlerToEvent[p];
    if (e) {
      hammer.off(e);
      hammer.on(e, props[p]);
    }
  });
}

export default class HammerComponent extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onDoubleTap: PropTypes.func,
    onPan: PropTypes.func,
    onPanCancel: PropTypes.func,
    onPanEnd: PropTypes.func,
    onPanStart: PropTypes.func,
    onPinch: PropTypes.func,
    onPinchCancel: PropTypes.func,
    onPinchEnd: PropTypes.func,
    onPinchIn: PropTypes.func,
    onPinchOut: PropTypes.func,
    onPinchStart: PropTypes.func,
    onPress: PropTypes.func,
    onPressUp: PropTypes.func,
    onRotate: PropTypes.func,
    onRotateCancel: PropTypes.func,
    onRotateEnd: PropTypes.func,
    onRotateMove: PropTypes.func,
    onRotateStart: PropTypes.func,
    onSwipe: PropTypes.func,
    onSwipeRight: PropTypes.func,
    onSwipeLeft: PropTypes.func,
    onSwipeUp: PropTypes.func,
    onSwipeDown: PropTypes.func,
    onTap: PropTypes.func,
    createRef: PropTypes.func,
  };

  componentDidMount() {
    this.hammer = new Hammer(this.domElement);
    updateHammer(this.hammer, this.props);
  }

  componentDidUpdate() {
    if (this.hammer) {
      updateHammer(this.hammer, this.props);
    }
  }

  componentWillUnmount() {
    if (this.hammer) {
      this.hammer.stop();
      this.hammer.destroy();
    }
    this.hammer = null;
  }

  render() {
    const props = {};

    Object.keys(this.props).forEach(function(i) {
      if (!privateProps[i]) {
        props[i] = this.props[i];
      }
    }, this);

    const self = this;
    props.ref = function(domElement) {
      if (self.props.createRef) {
        self.props.createRef(domElement);
      }
      self.domElement = domElement;
    };
    return React.cloneElement(React.Children.only(this.props.children), omit(props, ['createRef']));
  }
}
