---
category: Components
title: 手势操作
---

Hammer wraps a React component, binding Hammer events to it so it can fire the handlers specified.

<DEMO>

## Properties

### Event Listener properties

* `onTap`
* `onDoubleTap`
* `onPan`
* `onPanCancel`
* `onPanEnd`
* `onPanStart`
* `onPinch`
* `onPinchCancel`
* `onPinchEnd`
* `onPinchIn`
* `onPinchOut`
* `onPinchStart`
* `onPress`
* `onPressUp`
* `onRotate`
* `onRotateCancel`
* `onRotateEnd`
* `onRotateMove`
* `onRotateStart`
* `onSwipe`
* `action` - like the `onTap` event handler but will also be fired `onPress`.

### Behavior properties

* `direction` - (string) `'DIRECTION_ALL'` | `'DIRECTION_HORIZONTAL'` | `'DIRECTION_VERTICAL'`. Used to restrict the `pan` and `swipe` direction. These string values may also work: `'DIRECTION_NONE'` |`'DIRECTION_LEFT'` | `'DIRECTION_RIGHT'` | `'DIRECTION_UP'` | `'DIRECTION_DOWN'`.

* `options` - can be used to configure the Hammer manager. These properties will be merged with the default ones.

### other props

| 参数      | 说明         | 类型   | 默认值 |
| --------- | ------------ | ------ | ------ |
| className | 组件额外样式 | string | -      |
| createRef | ref          | func   | -      |
