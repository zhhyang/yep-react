import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dialog from './Dialog';

export default function confirm(
  title:string,
  message:any,
  actions = [
    {text: 'Cancel', onClick: () => console.log('cancel'), className: ''},
    {text: 'Ok', onClick: () => console.log('ok'), className: ''},
  ],
  restProps = {}
) {
  const prefixCls = 'Yep-dialog';
  let closed = false;

  if (!title && !message) {
    // console.log('Must specify either an alert title, or message, or both');
    return {
      close: () => {},
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
    const orginPress = button.onClick || function() {};
    button.onClick = () => {
      if (closed) {
        return;
      }

      const res = orginPress() as any;
      if (res && res.then) {
        res
          .then(() => {
            closed = true;
            close();
          })
          .catch(() => {});
      } else {
        closed = true;
        close();
      }
    };
    return button;
  });

  const footer = (
    <div className={`${prefixCls}-button-group-h`}>
      {buttons.map((button, index) => (
        <a
          className={`${prefixCls}-button ${button.className ? button.className : ''}`}
          onClick={button.onClick}
          key={index}
        >
          {button.text}
        </a>
      ))}
    </div>
  );
  ReactDOM.render(
    <Dialog show={true} title={title} footer={footer} onClose={close} {...restProps}>
      <div className={`${prefixCls}-alert-content`}>{message}</div>
    </Dialog>,
    div
  );

  return {
    close,
  };
}
