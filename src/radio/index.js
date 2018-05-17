import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseCheckbox from '../checkbox/BaseCheckbox';

export default class Radio extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    onChange: () => {},
    name: PropTypes.string,
    /**
     * ['option1','option2']
     *
     * or
     *
     * [{
     *  label:'label1',
     *  value: 'value1'
     * },{
     *  label: 'Option2',
            value: '2',
            disabled: true,
     * },{
     * label: 'Option3',
            value: '3',
            disabled: true,
            defaultChecked:true,
     * }]
     *
     *
     */
    options: PropTypes.array,
    checked: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * 是否水平排列
     */
    horizontal: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'Yep-radio',
    options: [],
    horizontal: false,
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: props.checked || props.options[0].value || props.options[0].label || props.options[0],
    };
  }

  handleChange(value, index) {
    const {onChange} = this.props;
    this.setState({
      value,
    });
    onChange(index);
  }

  render() {
    const {className, style, options, horizontal, ...restProps} = this.props;

    const {prefixCls} = restProps;
    const wrapCls = classNames(`${prefixCls}-wrapper`, className, {
      [`${prefixCls}-horizontal`]: horizontal,
      [`${prefixCls}-vertical`]: !horizontal,
    });
    return (
      <div className={wrapCls} style={style}>
        {options.map((option, index) => (
          <BaseCheckbox
            key={index}
            type="radio"
            label={option.label || option}
            disabled={option.disabled}
            checked={this.state.value === (option.value || option.label || option)}
            onChange={() => this.handleChange(option.value || option.label || option, index)}
            value={option.value || option.label || option}
            {...restProps}
          />
        ))}
      </div>
    );
  }
}
