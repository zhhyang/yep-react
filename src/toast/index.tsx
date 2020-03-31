import * as React from 'react';
import Notification from './Notification';

let messageInstance: any = null;

function getInstance(props: any, callback: (notification: any) => void) {
  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
  }

  Notification.newInstance(props, (notification: any) => {
    return callback && callback(notification);
  });
}

function notice(message: string | React.ReactNode, icon: any, duration: number = 3, onClose?: () => void) {
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
    (notification: any) => {
      messageInstance = notification;
    }
  );
}

export default {
  SHORT: 3,
  LONG: 8,
  show(message: string | React.ReactNode, duration?: number, onClose?: () => void) {
    return notice(message, null, duration, onClose);
  },
  success(message: string | React.ReactNode, duration?: number, onClose?: () => void) {
    return notice(message, 'lego_duohao1', duration, onClose);
  },
  fail(message: string | React.ReactNode, duration?: number, onClose?: () => void) {
    return notice(message, 'shop-shuoming', duration, onClose);
  },
  loading(message: string | React.ReactNode, duration?: number, onClose?: () => void) {
    return notice(message, 'lego_jiazai', duration, onClose);
  },
};
