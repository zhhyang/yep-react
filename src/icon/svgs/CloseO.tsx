import * as React from 'react';
import Icon from '@jdcfe/icons-react';
const svg = (props: any) => (
  <svg viewBox="0 0 1024 1024" {...props}>
    <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#F2F2F2" p-id="2400" />
    <path
      d="M628.736 449.536a38.4 38.4 0 1 1-54.272-54.272l76.8-76.8a38.4 38.4 0 1 1 54.272 54.272l-76.8 76.8zM705.536 651.264a38.4 38.4 0 1 1-54.272 54.272L512 566.3488l-139.264 139.2384a38.4 38.4 0 1 1-54.272-54.3232L457.7024 512l-139.264-139.264a38.4 38.4 0 1 1 54.3232-54.272l332.8 332.8"
      fill="#8C8C8C"
      p-id="2401"
    />
  </svg>
);
const CloseO: React.FC<any> = props => <Icon component={svg} {...props} />;
export default CloseO;
