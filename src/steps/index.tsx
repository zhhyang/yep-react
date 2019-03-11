import * as React from 'react';
import * as PropTypes from 'prop-types';
import './style';

interface StepsProps {
  prefixCls?: string;
  className?: string;
  style?: string;
  stepNum: number;
  titles: string[];
  desc: string[];
}

export default class Steps extends React.Component<StepsProps> {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    stepNum: PropTypes.number,
    titles: PropTypes.array,
    desc: PropTypes.array,
  };

  static defaultProps = {
    prefixCls: 'Yep-steps',
    style: {},
    stepNum: 1,
    titles: ['step1', 'step2', 'step3', 'step3'],
    desc: ['step1_text', 'step2_text', 'step3_text'],
  };

  constructor(props: StepsProps) {
    super(props);
  }

  render() {
    const {stepNum, titles, desc} = this.props;
    return (
      <div className="Yep-steps">
        <div className="step-list">
          <div className={'step-line'}>
            <div
              className={'line-blue'}
              style={{
                width:
                  (100 / (titles.length * 2)) *
                    (stepNum === 1 ? 1 : stepNum === titles.length ? titles.length * 2 : stepNum * 2 - 1) +
                  '%',
              }}
            />
          </div>
          {titles.map((item: any, key: number) => {
            console.log(stepNum);
            return (
              <div
                key={key}
                style={{width: 100 / titles.length + '%'}}
                className={`step-item ${stepNum > key ? 'current' : ''}`}
              >
                <span className="step-num">{key + 1}</span>
                <div className="item-text">{item}</div>
                <div className="item-text fs24">{desc[key]}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
