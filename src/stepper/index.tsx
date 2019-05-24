import * as React from 'react';
import classNames from 'classnames';

export interface Count {
  min: number;
  max: number;
  value: number;
}

export interface StepperProps extends Count {
  className?: string;
  onChange: (count: number) => {};
  prefixCls?: string;
  style?: React.CSSProperties;
}

const getCount = (props: Count) => {
  let count;
  const {min, max, value} = props;
  if (value < min) {
    count = min;
  } else if (value > max) {
    count = max;
  } else {
    count = value;
  }
  return {
    count,
  };
};

class Stepper extends React.PureComponent<StepperProps, any> {
  timer: any = null;

  static defaultProps = {
    max: 99,
    min: 1,
    onChange: () => {},
    prefixCls: 'Yep-stepper',
    style: {},
    value: 1,
  };

  constructor(props: StepperProps) {
    super(props);
    this.state = getCount(props);
    this.change = this.change.bind(this);
    this.check = this.check.bind(this);
    this.add = this.add.bind(this);
    this.reduce = this.reduce.bind(this);
    this.blur = this.blur.bind(this);
  }
  componentDidMount() {
    this.timer = null;
  }
  componentWillReceiveProps(nextProps: StepperProps) {
    if (nextProps.min !== this.props.min || nextProps.max !== this.props.max || nextProps.value !== this.props.value) {
      this.setState(getCount(nextProps));
    }
  }
  change(e: React.ChangeEvent<HTMLInputElement>) {
    clearTimeout(this.timer);
    const {value} = e.target;
    if (value.match(/\D/g)) {
      return;
    }
    if (value === '') {
      this.setState({
        count: '',
      });
    } else {
      const count = Number(value);
      this.setState(
        {
          count,
        },
        () => {
          this.timer = setTimeout(this.check, 500);
        }
      );
    }
  }
  check() {
    const {min, max, onChange} = this.props;
    const currentState = getCount({
      min,
      max,
      value: this.state.count,
    });
    this.setState(currentState);
    onChange(currentState.count);
  }
  reduce() {
    const {count} = this.state;
    this.setState({
      count: count - 1,
    });
    this.props.onChange(count - 1);
  }
  add() {
    const {count} = this.state;
    this.setState({
      count: count + 1,
    });
    this.props.onChange(count + 1);
  }
  blur(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === '') {
      const {min, onChange} = this.props;
      this.setState({
        count: min,
      });
      onChange(min);
    }
  }
  render() {
    const {count} = this.state;
    const {className, min, max, prefixCls} = this.props;
    const cls = classNames(prefixCls, className);
    return (
      <div className={cls}>
        <button disabled={count <= min || count === ''} className="button-reduce" onClick={this.reduce}>
          -
        </button>
        <div className="input-wrapper">
          <input
            className="input-value"
            type="number"
            pattern="[0-9]*"
            value={count}
            onChange={this.change}
            onBlur={this.blur}
          />
        </div>
        <button disabled={max <= count || count === ''} className="button-add" onClick={this.add}>
          +
        </button>
      </div>
    );
  }
}

export default Stepper;
