import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({percent, colorStart, colorEnd}) => {
  const absPercent = Math.abs(percent);
  const comPercent = percent ? Math.min(absPercent, 100) + '%' : 0;

  const style = {
    background: `linear-gradient(to right, ${colorStart} 0%, ${colorEnd} 100%)`,
    width: comPercent,
  };

  return (
    <div id="common-progressbar" className="Yep-common-progressbar">
      <div className="bar">
        <div id="progressbar" className="progress" style={style} />
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  percent: PropTypes.number,
  colorStart: PropTypes.string,
  colorEnd: PropTypes.string,
};

ProgressBar.defaultProps = {
  percent: 0,
  colorStart: '#feaa36',
  colorEnd: '#ff5741',
};

export default ProgressBar;
