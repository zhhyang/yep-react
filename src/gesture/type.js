// @flow
import * as React from 'react';

export type Finger = {
  x: number, // e.touches[i].pageX
  y: number, // e.touches[i].pageY
};

export type MultiFingerStatus = {
  x: number,
  y: number,
  z: number,
  angle: number,
};

export type SingeFingerMoveStatus = {
  x: number,
  y: number,
  z: number,
  time: number,
  velocity: number,
  angle: number,
};
// http://hammerjs.github.io/api/#event-object
export type GestureStatus = {
  /* start status snapshot */
  startTime: number,
  startTouches: Finger[],

  startMutliFingerStatus: MultiFingerStatus[],

  /* now status snapshot */
  time: number,
  touches: Finger[],
  preTouches: Finger[],

  mutliFingerStatus: MultiFingerStatus[],

  /* delta status from touchstart to now, just for singe finger */
  moveStatus: SingeFingerMoveStatus,

  /* whether is a long tap */
  press: boolean,

  /* whether is a pan */
  pan: boolean,
  /* whether is an available pan */
  availablePan: boolean,

  /* whether is a swipe */
  swipe: boolean,
  direction: number,

  /* whether is in pinch process */
  pinch: boolean,
  scale: number,

  /* whether is in rotate process */
  rotate: boolean,
  rotation: number, // Rotation (in deg) that has been done when multi-touch. 0 on a single touch.
  /* event, such as TouchEvent, MouseEvent, PointerEvent */
  srcEvent: any,
};

export type GestureHandler = (s: GestureStatus) => void;

export type IGesture = {
  enableRotate?: boolean,
  enablePinch?: boolean,
  // control allowed direction
  direction?: ['all', 'vertical', 'horizontal'],
  // pinch: s.zoom
  onPinch?: GestureHandler,
  onPinchStart?: GestureHandler,
  onPinchMove?: GestureHandler,
  onPinchEnd?: GestureHandler,
  onPinchCancel?: GestureHandler,
  onPinchIn?: GestureHandler,
  onPinchOut?: GestureHandler,
  // rotate: s.angle
  onRotate?: GestureHandler,
  onRotateStart?: GestureHandler,
  onRotateMove?: GestureHandler,
  onRotateEnd?: GestureHandler,
  onRotateCancel?: GestureHandler,
  // pan: s.delta
  onPan?: GestureHandler,
  onPanStart?: GestureHandler,
  onPanMove?: GestureHandler,
  onPanEnd?: GestureHandler,
  onPanCancel?: GestureHandler,
  onPanLeft?: GestureHandler,
  onPanRight?: GestureHandler,
  onPanUp?: GestureHandler,
  onPanDown?: GestureHandler,
  // tap
  onTap?: GestureHandler,
  // long tap
  onPress?: GestureHandler,
  onPressUp?: GestureHandler,
  // swipe
  onSwipe?: GestureHandler,
  onSwipeLeft?: GestureHandler,
  onSwipeRight?: GestureHandler,
  onSwipeUp?: GestureHandler,
  onSwipeDown?: GestureHandler,
  // original dom element event handler
  onTouchStart?: React.TouchEventHandler<HTMLElement>,
  onTouchMove?: React.TouchEventHandler<HTMLElement>,
  onTouchEnd?: React.TouchEventHandler<HTMLElement>,
  onTouchCancel?: React.TouchEventHandler<HTMLElement>,
};
