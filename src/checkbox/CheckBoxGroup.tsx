import * as React from 'react';
import {CheckboxProps} from './index';

export interface CheckBoxGroupProps {
  value: any[];
  onChange?: (value: any[]) => void;
}

class CheckBoxGroup extends React.Component<CheckBoxGroupProps> {
  static defaultProps = {
    value: [],
    onChange: () => null,
  };

  private validateChecked(childProps: CheckboxProps) {
    return this.props.value.indexOf(childProps.value) > -1;
  }

  private handleChange = (e: any) => {
    const {value} = this.props;
    const {value: itemValue, checked} = e.target;
    let tmpValue = value.concat();
    const idx = value.indexOf(itemValue);
    if (checked) {
      if (idx > -1) {
      } else {
        tmpValue.push(itemValue);
      }
    } else {
      if (idx > -1) {
        tmpValue.splice(idx, 1);
      }
    }
    this.props.onChange && this.props.onChange(tmpValue);
  };

  render() {
    const {children} = this.props;
    return (
      <div>
        {React.Children.map(children, (child, index) => {
          const childProps = (child as any).props;
          const checked = this.validateChecked(childProps);
          if ((child as any).type.displayName === 'Checkbox') {
            return React.cloneElement(child as any, {
              key: index,
              checked,
              onChange: this.handleChange,
            });
          } else {
            return React.cloneElement(child as any);
          }
        })}
      </div>
    );
  }
}

export default CheckBoxGroup;
