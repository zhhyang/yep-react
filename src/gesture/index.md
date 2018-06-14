---
category: Components
title: 手势操作
---

为移动端 React 组件提供手势操作

<DEMO>

## Properties

### common props

| 参数      | 类型   | 默认值 | 说明                                                                                |
| --------- | ------ | ------ | ----------------------------------------------------------------------------------- |
| direction | string | `all`  | control the allowed gesture direction, could be `['all', 'vertical', 'horizontal']` |

### Swipe

| 参数         | 类型     | 默认值 | 说明                                                                     |
| ------------ | -------- | ------ | ------------------------------------------------------------------------ |
| onSwipe      | function | -      | swipe callback, will triggered at the same time of all of below callback |
| onSwipeLeft  | function | -      | swipe left callback                                                      |
| onSwipeRight | function | -      | swipe right callback                                                     |
| onSwipeUp    | function | -      | swipe Up callback                                                        |
| onSwipeDown  | function | -      | swipe down callback                                                      |

### Pan

| 参数        | 类型     | 默认值 | 说明                                                                   |
| ----------- | -------- | ------ | ---------------------------------------------------------------------- |
| onPan       | function |        | pan callback, will triggered at the same time of all of below callback |
| onPanStart  | function |        | drag start callback                                                    |
| onPanMove   | function |        | drag move callback                                                     |
| onPanEnd    | function |        | drag end callback                                                      |
| onPanCancel | function |        | drag cancel callback                                                   |
| onPanLeft   | function |        | pan left callback                                                      |
| onPanRight  | function |        | pan right callback                                                     |
| onPanUp     | function |        | pan up callback                                                        |
| onPanDown   | function |        | pan down callback                                                      |

### Pinch

pinch gesture is not enabled by default, you must set props.enablePinch = true at first;
| 参数 | 类型 | 默认值 | 说明 |
| ----------- | -------- | ------ | ---------------------------------------------------------------------- |
| onPinch | function | | pinch callback, will triggered at the same time of all of below callback |
| onPinchStart | function | | pinch start callback |
| onPinchMove | function | | pinch move callback |
| onPinchEnd | function | | pinch end callback |
| onPinCancel | function | | pinch cancel callback |
| onPinchIn | function | |pinch in callback |
| onPinchOut | function | | pinch out callback |

### Rotate

Rotate gesture is not enabled by default, you must set props.enableRotate = true at first;

| 参数           | 类型     | 默认值               | 说明                                                                      |
| -------------- | -------- | -------------------- | ------------------------------------------------------------------------- |
| onRotate       | function |                      | rotate callback, will triggered at the same time of all of below callback |
| onRotateStart  | function |                      | rotate start callback                                                     |
| onRotateMove   | function | rotate move callback |
| onRotateEnd    | function |                      | rotate end callback                                                       |
| onRotateCancel | function |                      | rotate cancel callback                                                    |

### gesture

// http://hammerjs.github.io/api/#event-object
export type GestureStatus = {
/_ start status snapshot _/
startTime: number,
startTouches: Finger[],

startMutliFingerStatus: MultiFingerStatus[],

/_ now status snapshot _/
time: number,
touches: Finger[],
preTouches: Finger[],

mutliFingerStatus: MultiFingerStatus[],

/_ delta status from touchstart to now, just for singe finger _/
moveStatus: SingeFingerMoveStatus,

/_ whether is a long tap _/
press: boolean,

/_ whether is a pan _/
pan: boolean,
/_ whether is an available pan _/
availablePan: boolean,

/_ whether is a swipe _/
swipe: boolean,
direction: number,

/_ whether is in pinch process _/
pinch: boolean,
scale: number,

/_ whether is in rotate process _/
rotate: boolean,
rotation: number, // Rotation (in deg) that has been done when multi-touch. 0 on a single touch.
/_ event, such as TouchEvent, MouseEvent, PointerEvent _/
srcEvent: any,
};
