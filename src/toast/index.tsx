import * as React from 'react';
import CheckCircleOutlined from '@jdcfe/yep-icons/CheckCircleOutlined';
import TipOutlined from '@jdcfe/yep-icons/TipOutlined';
import Icon from '@jdcfe/yep-icons';
import Notification from './Notification';
import JiaZai from '../icon/svgs/JiaZai';

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
    return notice(message, <CheckCircleOutlined />, duration, onClose);
  },
  fail(message: string | React.ReactNode, duration?: number, onClose?: () => void) {
    return notice(message, <TipOutlined />, duration, onClose);
  },
  loading(message: string | React.ReactNode, duration?: number, onClose?: () => void) {
    return notice(message, <Icon component={JiaZai} className={'Yep-toast-notice-icon-jiazai'} />, duration, onClose);
  },
};
