import * as React from 'react';
import classNames from 'classnames';

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({
  prefixCls,
  className,
  style,
  percent,
  backgroundColor,
  colorStart,
  colorEnd,
  fixed,
}) => {
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

export interface ProgressBarProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  className?: string;
  percent: number;
  backgroundColor?: string;
  colorStart?: string;
  colorEnd?: string;
  fixed?: boolean;
}

ProgressBar.defaultProps = {
  prefixCls: 'Yep-progress',
  style: {},
  percent: 0,
  backgroundColor: '#ec3838',
  fixed: false,
} as Partial<ProgressBarProps>;

export default ProgressBar;
