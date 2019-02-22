import React from 'react';
import Notification from './Notification';
import noop from '../_utils/noop';

let messageInstance:any = null;

function getInstance(props:any, callback:() => void) {
  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
  }

  Notification.newInstance(props, notification => callback && callback(notification));
}

function notice(message:string, icon:any, duration = 3, onClose: () => void) {
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
  show(message:string, duration:number, onClose:() => void) {
    return notice(message, null, duration, onClose);
  },
  success(message:string, duration:number, onClose = noop) {
    return notice(message, 'lego_duohao1', duration, onClose);
  },
  fail(message:string, duration:number, onClose = noop) {
    return notice(message, 'shop-shuoming', duration, onClose);
  },
  loading(message:string, duration:number, onClose = noop) {
    return notice(message, 'lego_jiazai', duration, onClose);
  },
};
