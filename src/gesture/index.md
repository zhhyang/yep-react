---
category: Basic
title: 手势操作
---

为移动端 React 组件提供手势操作。

<DEMO>

### 基本属性

| 参数      | 类型   | 默认值 | 说明                                                        |
| --------- | ------ | ------ | ----------------------------------------------------------- |
| direction | string | `all`  | 控制允许的手势方向，可选`['all', 'vertical', 'horizontal']` |

### 滑动事件

| 参数         | 类型     | 默认值 | 说明                                     |
| ------------ | -------- | ------ | ---------------------------------------- |
| onSwipe      | function | -      | 滑动事件回调函数，会在滑动事件触发时执行 |
| onSwipeLeft  | function | -      | 向左滑动事件触发时执行                   |
| onSwipeRight | function | -      | 向右滑动事件触发时执行                   |
| onSwipeUp    | function | -      | 向上滑动事件触发时执行                   |
| onSwipeDown  | function | -      | 向下滑动事件触发时执行                   |

### Pan

| 参数        | 类型     | 默认值 | 说明                                                 |
| ----------- | -------- | ------ | ---------------------------------------------------- |
| onPan       | function |        | 拖拽事件回调函数，会在下方全部拖拽事件触发同时时执行 |
| onPanStart  | function |        | 拖拽事件开始时触发                                   |
| onPanMove   | function |        | 拖拽事件进行中触发                                   |
| onPanEnd    | function |        | 拖拽事件结束时触发                                   |
| onPanCancel | function |        | 拖拽事件取消时触发                                   |
| onPanLeft   | function |        | 向左拖拽时触发                                       |
| onPanRight  | function |        | 向右拖拽时触发                                       |
| onPanUp     | function |        | 向上拖拽时触发                                       |
| onPanDown   | function |        | 向下拖拽时触发                                       |

### 双指捏合

默认不支持双指捏合事件,需要设置 props.enablePinch = true 来开启事件监听;

| 参数         | 类型     | 默认值 | 说明                                                 |
| ------------ | -------- | ------ | ---------------------------------------------------- |
| onPinch      | function |        | 捏合事件回调函数，会在下方全部捏合事件触发同时时执行 |
| onPinchStart | function |        | 捏合事件开始时触发                                   |
| onPinchMove  | function |        | 捏合事件进行中触发                                   |
| onPinchEnd   | function |        | 捏合事件结束时触发                                   |
| onPinCancel  | function |        | 捏合事件取消时触发                                   |
| onPinchIn    | function |        | 缩小事件监听                                         |
| onPinchOut   | function |        | 放大事件监听                                         |

### 旋转

默认不支持旋转手势，需要设置 props.enableRotate = true 来开启监听;

| 参数           | 类型     | 默认值 | 说明                                                 |
| -------------- | -------- | ------ | ---------------------------------------------------- |
| onRotate       | function |        | 旋转事件回调函数，会在下方全部旋转事件触发同时时执行 |
| onRotateStart  | function |        | 旋转事件开始时触发                                   |
| onRotateMove   | function |        | 旋转事件进行中触发                                   |
| onRotateEnd    | function |        | 旋转事件结束时触发                                   |
| onRotateCancel | function |        | 旋转事件取消时触发                                   |

### gesture

```javascript
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
```
