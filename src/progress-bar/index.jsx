import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ProgressBar = ({prefixCls, className, style, percent, backgroundColor, colorStart, colorEnd, fixed}) => {
  const absPercent = Math.abs(percent);
  const comPercent = percent ? Math.min(absPercent, 100) + '%' : 0;

  const wrapCls = classNames(prefixCls, className, {
    [`${prefixCls}-fixed`]: fixed,
  });

  const barStyle = {
    width: comPercent,
    background:
      colorStart && colorEnd ? `linear-gradient(to right, ${colorStart} 0%, ${colorEnd} 100%)` : backgroundColor,
  };

  return (
    <div className={wrapCls} style={style}>
      <div className={`${prefixCls}-bar`} style={barStyle} />
    </div>
  );
};

ProgressBar.propTypes = {
  prefixCls: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  percent: PropTypes.number,
  backgroundColor: PropTypes.string,
  colorStart: PropTypes.string,
  colorEnd: PropTypes.string,
  fixed: PropTypes.bool,
};

ProgressBar.defaultProps = {
  prefixCls: 'Yep-progress',
  style: {},
  percent: 0,
  backgroundColor: '#ec3838',
  fixed: false,
};

export default ProgressBar;
