import * as React from 'react';

import Wrap from './Wrap';

const InitialComponent:React.FunctionComponent<SkeletonProps> = props => <rect x="0" y="0" rx="5" ry="5" width={props.width} height={props.height} />;

const Skeleton:React.FunctionComponent<SkeletonProps> = props => {
  const {children, ...restProps} = props;

  return <Wrap {...restProps}>{children ? children : <InitialComponent {...restProps} />}</Wrap>;
};

export interface SkeletonProps {
  animate?: boolean;
  speed?: number;
  className?: string;
  width?: number;
  height?: number;
  preserveAspectRatio?: string;
  primaryColor?: string;
  secondaryColor?: string;
  primaryOpacity?: number;
  secondaryOpacity?: number;
  style?: React.CSSProperties;
  uniquekey?: string;
}

Skeleton.defaultProps = {
  animate: true,
  speed: 2,
  width: 400,
  height: 130,
  preserveAspectRatio: 'xMidYMid meet',
  primaryColor: '#f0f0f0',
  secondaryColor: '#e0e0e0',
  primaryOpacity: 1,
  secondaryOpacity: 1,
};

export default Skeleton;
