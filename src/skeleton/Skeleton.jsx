import React from 'react';

import PropTypes from 'prop-types';
import Wrap from './Wrap';

const InitialComponent = props => <rect x="0" y="0" rx="5" ry="5" width={props.width} height={props.height} />;

const Skeleton = props => {
  const {children, ...restProps} = props;

  return <Wrap {...restProps}>{children ? children : <InitialComponent {...restProps} />}</Wrap>;
};

Skeleton.propTypes = {
  animate: PropTypes.bool,
  speed: PropTypes.number,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  preserveAspectRatio: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  primaryOpacity: PropTypes.number,
  secondaryOpacity: PropTypes.number,
  style: PropTypes.object,
  uniquekey: PropTypes.string,
};

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
