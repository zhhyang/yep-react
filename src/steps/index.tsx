import * as React from 'react';
import classNames from 'classnames';

interface StepsProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  stepNum: number;
  titles: string[];
  desc: string[];
  icon?: React.ReactElement[];
}

export default class Steps extends React.Component<StepsProps> {
  static defaultProps = {
    prefixCls: 'Yep-steps',
    style: {},
    stepNum: 1,
    titles: ['step1', 'step2', 'step3'],
    desc: ['step1_text', 'step2_text', 'step3_text'],
    icon: [],
  };

  constructor(props: StepsProps) {
    super(props);
  }

  renderStepIcon(key: number, stepNum: number) {
    const {prefixCls, icon} = this.props;
    if (icon && icon.length) {
      return (
        <span className={`${prefixCls}-num`}>
          {React.cloneElement(stepNum > key ? icon[0] : stepNum < key ? icon[1] : icon[2], {
            className: 'Yep-steps-icon',
          })}
        </span>
      );
    } else {
      return <span className={`${prefixCls}-num`}> {key + 1}</span>;
    }
  }

  render() {
    const {prefixCls, className, style, stepNum, titles, desc} = this.props;
    const wrapCls = classNames(`${prefixCls}`, className);
    return (
      <div className={wrapCls} style={style}>
        <div className={`${prefixCls}-list`}>
          <div className={`${prefixCls}-line`}>
            <div
              className={`${prefixCls}-line-red`}
              style={{
                width:
                  (100 / (titles.length * 2)) *
                    (stepNum === 1 ? 1 : stepNum === titles.length ? titles.length * 2 : stepNum * 2 - 1) +
                  '%',
              }}
            />
          </div>
          {titles.map((item: any, key: number) => {
            return (
              <div
                key={key}
                style={{width: 100 / titles.length + '%'}}
                className={`${prefixCls}-item ${stepNum > key ? 'current' : ''}`}
              >
                {this.renderStepIcon(key, stepNum)}
                <div className={`${prefixCls}-item-text`}>{item}</div>
                <div className={`${prefixCls}-item-text fs24`}>{desc[key]}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
