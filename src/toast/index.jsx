import React from 'react';
import Notification from './Notification';
import noop from '../_utils/noop';

let messageInstance = null;

function getInstance(props, callback) {
  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
  }

  Notification.newInstance(props, notification => callback && callback(notification));
}

function notice(message, icon, duration = 3, onClose: noop) {
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
  success(message, duration, onClose = noop) {
    return notice(message, 'lego_duohao1', duration, onClose);
  },
  fail(message, duration, onClose = noop) {
    return notice(message, 'shop-shuoming', duration, onClose);
  },
  loading(message, duration, onClose = noop) {
    return notice(message, 'lego_jiazai', duration, onClose);
  },
};
