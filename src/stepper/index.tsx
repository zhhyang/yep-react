import * as React from 'react';
import classNames from 'classnames';

export interface IStepper {
  min: number;
  max: number;
}

export interface StepperProps extends IStepper {
  className?: string;
  onChange: (count: number) => {};
  onLess: (remove: boolean, callback: () => void) => {};
  onGreat: () => {};
  prefixCls?: string;
  style?: React.CSSProperties;
}

class Stepper extends React.PureComponent<StepperProps, any> {
  static defaultProps = {
    max: 99,
    min: 1,
    onChange: () => {},
    onLess: () => {},
    onGreat: () => {},
    prefixCls: 'Yep-stepper',
    style: {},
  };

  constructor(props: StepperProps) {
    super(props);
    this.state = {
      count: props.min,
    };
  }
  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {max} = this.props;
    const {value} = e.target;
    if (value.match(/\D/g)) {
      return;
    }
    let count = Number(value);
    if (count > max) {
      count = max;
      this.props.onGreat();
    }
    this.setState({
      count,
    });
  };
  handleReduce = () => {
    const {count} = this.state;
    this.setState({
      count: count - 1,
    });
    this.props.onChange(count - 1);
  };
  handleAdd = () => {
    const {count} = this.state;
    this.setState({
      count: count + 1,
    });
    this.props.onChange(count + 1);
  };
  handleBlur = () => {
    const {min} = this.props;
    const {count} = this.state;
    if (count < min) {
      this.props.onLess(count === 0, () => {
        this.setState({
          count: min,
        });
      });
      this.props.onChange(min);
    } else {
      this.props.onChange(count);
    }
  };
  render() {
    const {count} = this.state;
    const {className, min, max, prefixCls} = this.props;
    const cls = classNames(prefixCls, className);
    const reduceDisabled = count <= min || count === 0;
    const addDisabled = count >= max || count === 0;
    const inputValue = count === 0 ? '' : count;
    return (
      <div className={cls}>
        <button disabled={reduceDisabled} className="button-reduce" onClick={this.handleReduce}>
          -
        </button>
        <div className="input-wrapper">
          <input
            className="input-value"
            type="number"
            pattern="[0-9]*"
            value={inputValue}
            onChange={this.handleInput}
            onBlur={this.handleBlur}
          />
        </div>
        <button disabled={addDisabled} className="button-add" onClick={this.handleAdd}>
          +
        </button>
      </div>
    );
  }
}

export default Stepper;
