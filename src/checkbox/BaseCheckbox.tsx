import * as React from 'react';
import classNames from 'classnames';

export interface BaseCheckboxProps {
  prefixCls?: string;
  className?: string;
  style: React.CSSProperties;
  name?: string;
  id?: string;
  type?: string;
  label?:string;
  defaultChecked?: number | boolean;
  checked?: number | boolean | string;
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange: (cb:any) => void;
  onClick?: () => void;
  tabIndex?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  value?: any;
}

export default class BaseCheckbox extends React.PureComponent<BaseCheckboxProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-checkbox',
    className: '',
    style: {},
    type: 'checkbox',
    defaultChecked: false,
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
  };

  input:HTMLInputElement;

  constructor(props: BaseCheckboxProps) {
    super(props);
    const checked = 'checked' in props ? props.checked : props.defaultChecked;

    this.state = {
      checked,
    };

    this.createRef = this.createRef.bind(this);
    this.blur = this.blur.bind(this);
    this.focus = this.focus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps:BaseCheckboxProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked,
      });
    }
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  createRef(node:HTMLInputElement) {
    this.input = node;
  }

  handleChange(e:any) {
    const {disabled, onChange} = this.props;
    if (disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked: e.target.checked,
      });
    }
    onChange({
      target: {
        ...this.props,
        checked: e.target.checked,
      },
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent,
    });
  }

  render() {
    const {
      prefixCls,
      className,
      style,
      name,
      id,
      type,
      disabled,
      readOnly,
      tabIndex,
      onClick,
      onFocus,
      onBlur,
      autoFocus,
      value,
      label,
      ...others
    } = this.props;

    const globalProps = Object.keys(others).reduce((prev:any, key) => {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        //@ts-ignore
        prev[key] = others[key];
      }
      return prev;
    }, {});

    const {checked} = this.state;
    const classString = classNames(prefixCls, className, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
    });

    return (
      <span className={classString} style={style}>
        <input
          name={name}
          id={id}
          type={type}
          readOnly={readOnly}
          disabled={disabled}
          tabIndex={tabIndex}
          className={`${prefixCls}-input`}
          checked={!!checked}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={this.handleChange}
          autoFocus={autoFocus}
          ref={this.createRef}
          value={value}
          {...globalProps}
        />
        <span className={`${prefixCls}-inner`} />
        <span className={`${prefixCls}-label`}>{label}</span>
      </span>
    );
  }
}
