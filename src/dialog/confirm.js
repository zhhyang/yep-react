import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';

export default function confirm(
  title,
  message,
  actions = [
    {text: 'Cancel', onClick: () => console.log('cancel')},
    {text: 'Ok', onClick: () => console.log('ok')},
  ],
) {
  const prefixCls = 'Yep-dialog';
  let closed = false;

  if (!title && !message) {
    // console.log('Must specify either an alert title, or message, or both');
    return {
      close: () => {
      },
    };
  }

  const div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  const buttons = actions.map(button => {
    // tslint:disable-next-line:only-arrow-functions
    const orginPress = button.onClick || function () {
    };
    button.onClick = () => {
      if (closed) {
        return;
      }

      const res = orginPress();
      if (res && res.then) {
        res
          .then(() => {
            closed = true;
            close();
          })
          .catch(() => {
          });
      } else {
        closed = true;
        close();
      }
    };
    return button;
  });

  const footer =
    <div className={`${prefixCls}-button-group-h`}>
      {
        buttons.map((button, index) =>
          <a className={`${prefixCls}-button`} onClick={button.onClick} key={index}>
            {button.text}
          </a>
        )
      }
    </div>;
  ReactDOM.render(
    <Dialog
      visible
      transparent
      title={title}
      closable={false}
      maskClosable={true}
      footer={footer}
      onClose={close}
    >
      <div className={`${prefixCls}-alert-content`}>{message}</div>
    </Dialog>,
    div,
  );

  return {
    close,
  };
}
