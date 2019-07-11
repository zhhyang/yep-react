import * as React from 'react';
import classNames from 'classnames';

export interface StepperProps {
  buttonAdd?: React.ReactElement;
  buttonReduce?: React.ReactElement;
  className?: string;
  max: number;
  min: number;
  onChange: (value: number) => void;
  onLess: (value: number) => void;
  onGreat: () => void;
  prefixCls?: string;
  readonly: boolean;
  step: number;
  style?: React.CSSProperties;
  value: number;
}

export interface ButtonProps {
  children?: any;
  disabled: boolean;
  onClick: () => void;
}

class Stepper extends React.PureComponent<StepperProps, any> {
  static defaultProps = {
    className: '',
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
  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {max, onChange, onGreat} = this.props;
    const {value} = e.target;
    if (value.match(/\D/g)) {
      return;
    }
    let count = Number(value);
    if (count > max) {
      count = max;
      onGreat();
    }
    onChange(count);
  };
  handleReduce = () => {
    const {min, onChange, step, value} = this.props;
    const newCount = value - step < min ? min : value - step;
    onChange(newCount);
  };
  handleAdd = () => {
    const {max, onChange, step, value} = this.props;
    const newCount = value + step > max ? max : value + step;
    onChange(newCount);
  };
  handleBlur = () => {
    const {min, onChange, onLess, value} = this.props;
    if (value < min) {
      onLess(value);
      onChange(min);
    }
  };
  renderButtonAdd = () => {
    const {buttonAdd, max, prefixCls, value} = this.props;
    const disabled = value >= max || value === 0;
    const button = buttonAdd || <button>+</button>;
    return React.cloneElement(button, {
      disabled: disabled,
      className: `${prefixCls}-button ${prefixCls}-add`,
      onClick: this.handleAdd,
    });
  };
  renderButtonReduce = () => {
    const {buttonReduce, min, prefixCls, value} = this.props;
    const disabled = value <= min || value === 0;
    const button = buttonReduce || <button>-</button>;
    return React.cloneElement(button, {
      disabled: disabled,
      className: `${prefixCls}-button ${prefixCls}-reduce`,
      onClick: this.handleReduce,
    });
  };
  render() {
    const {className, prefixCls, readonly, style, value} = this.props;
    const cls = classNames(prefixCls, className);
    const inputValue = value === 0 ? '' : value;
    return (
      <div className={cls} style={style}>
        {this.renderButtonReduce()}
        <div className={`${prefixCls}-input-wrapper`}>
          <input
            className={`${prefixCls}-input-value`}
            onBlur={this.handleBlur}
            onChange={this.handleInput}
            pattern="[0-9]*"
            readOnly={readonly}
            type="number"
            value={inputValue}
          />
        </div>
        {this.renderButtonAdd()}
      </div>
    );
  }
}

export default Stepper;
