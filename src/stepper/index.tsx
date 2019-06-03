import * as React from 'react';
import classNames from 'classnames';

import Icon from '../icon';

export interface StepperProps {
  buttonAdd?: any;
  buttonReduce?: any;
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
    const {buttonAdd, max, value} = this.props;
    const disabled = value >= max || value === 0;
    const button = buttonAdd || (
      <button>
        <Icon type="stepper_add" />
      </button>
    );
    return React.cloneElement(button, {
      disabled: disabled,
      className: 'button-add',
      onClick: this.handleAdd,
    });
  };
  renderButtonReduce = () => {
    const {buttonReduce, min, value} = this.props;
    const disabled = value <= min || value === 0;
    const button = buttonReduce || (
      <button>
        <Icon type="stepper_reduce" />
      </button>
    );
    return React.cloneElement(button, {
      disabled: disabled,
      className: 'button-reduce',
      onClick: this.handleReduce,
    });
  };
  render() {
    const {className, prefixCls, readonly, value} = this.props;
    const cls = classNames(prefixCls, className);
    const inputValue = value === 0 ? '' : value;
    return (
      <div className={cls}>
        {this.renderButtonReduce()}
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
        {this.renderButtonAdd()}
      </div>
    );
  }
}

export default Stepper;
