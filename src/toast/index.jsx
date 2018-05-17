import React from 'react';
import Notification from './Notification';

let messageInstance = null;

function getInstance(props, callback) {
  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
  }

  Notification.newInstance(props, notification => callback && callback(notification));
}

function notice(message, icon, duration = 3, onClose: () => {}) {
  function close() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
    if (onClose) {
      onClose();
    }
  }

  getInstance(
    {
      message,
      icon,
      duration,
      onClose: close,
    },
    notification => {
      messageInstance = notification;
    }
  );
}

export default {
  SHORT: 3,
  LONG: 8,
  show(message, duration, onClose) {
    return notice(message, null, duration, onClose);
  },
  success(message, duration, onClose: () => {}) {
    return notice(message, 'shop-zhengque', duration, onClose);
  },
  fail(message, duration, onClose: () => {}) {
    return notice(message, 'shop-zhuyi', duration, onClose);
  },
  loading(message, duration, onClose: () => {}) {
    return notice(message, 'data', duration, onClose);
  },
};
