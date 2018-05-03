import React from 'react';
import Notification from './Notification';

let messageInstance = null;

function getInstance(props, callback) {
  if (messageInstance) {
    messageInstance.destroy()
    messageInstance = null;
  }

  Notification.newInstance(props, notification => callback && callback(notification));
}

function notice(message,
                type,
                duration = 3,
                onClose: () => {}) {
  function close() {
    onClose()
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null;
    }
  }

  getInstance({
    message,
    type,
    duration,
    onClose: close
  }, notification => {
    messageInstance = notification;
  })
}

export default {
  SHORT: 3,
  LONG: 8,
  show(message, duration,) {
    return notice(message, 'add-circle', duration, () => {
    });
  },
  info(
    message,
    duration,
    onClose: () => {},
  ) {
    return notice(message, 'info', duration, onClose);
  },
  success(
    message,
    duration,
    onClose?: () => {},
  ) {
    return notice(message, 'success', duration, onClose);
  },
  fail(
    message,
    duration,
    onClose?: () => {},
  ) {
    return notice(message, 'fail', duration, onClose);
  },
  offline(
    message,
    duration,
    onClose?: () => {},
  ) {
    return notice(message, 'offline', duration, onClose);
  },
  loading(
    message,
    duration,
    onClose?: () => {},
  ) {
    return notice(message, 'loading', duration, onClose);
  },
};
