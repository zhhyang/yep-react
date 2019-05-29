import * as React from 'react';
import classNames from 'classnames';

export interface StepperProps {
  className?: string;
  max: number;
  min: number;
  onChange: (count: number) => {};
  onLess: (remove: boolean, callback: () => void) => {};
  onGreat: () => {};
  prefixCls?: string;
  readonly: boolean;
  step: number;
  style?: React.CSSProperties;
  value: number;
}

class Stepper extends React.PureComponent<StepperProps, any> {
  static defaultProps = {
    max: 99,
    min: 1,
    onChange: () => {},
    onLess: () => {},
    onGreat: () => {},
    prefixCls: 'Yep-stepper',
    readonly: false,
    step: 1,
    style: {},
    value: 1,
  };

  constructor(props: StepperProps) {
    super(props);
    this.state = {
      count: this.initCount(props),
    };
  }
  componentWillReceiveProps(nextProps: StepperProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        count: this.initCount(nextProps),
      });
    }
  }
  initCount = (props: StepperProps) => {
    const {max, min, value} = props;
    let count: number = value;
    if (value < min) {
      count = min;
    }
    if (value > max) {
      count = max;
    }
    return count;
  };
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
    const {min, step} = this.props;
    const newCount = count - step < min ? min : count - step;
    this.setState({
      count: newCount,
    });
    this.props.onChange(newCount);
  };
  handleAdd = () => {
    const {count} = this.state;
    const {max, step} = this.props;
    const newCount = count + step > max ? max : count + step;
    this.setState({
      count: newCount,
    });
    this.props.onChange(newCount);
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
    const {className, min, max, prefixCls, readonly} = this.props;
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
            onBlur={this.handleBlur}
            onChange={this.handleInput}
            pattern="[0-9]*"
            readOnly={readonly}
            type="number"
            value={inputValue}
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
