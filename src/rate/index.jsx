import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';

type Props = {
  prefixCls: string,
  className: string,
  style: Object,
  name: string,
  value: number,
  editing: boolean,
  starCount: number,
  onStarClick: PropTypes.func,
  renderStarIcon: PropTypes.func,
  renderStarIconHalf: PropTypes.func,
};

type State = {
  value: number,
};

export default class Rate extends React.PureComponent<Props, State> {
  static defaultProps = {
    prefixCls: 'Yep-rate',
    style: {},
    starCount: 5,
    editing: true,
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.renderStars = this.renderStars.bind(this);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    const {value} = nextProps;

    if (value != null && value !== this.state.value) {
      this.setState({value});
    }
  }

  onChange(inputValue) {
    const {editing, value} = this.props;

    if (!editing) {
      return;
    }

    // do not update internal state based on input value if prop passed
    if (value != null) {
      return;
    }

    this.setState({value: inputValue});
  }

  onStarClick(index, value, name, e) {
    e.stopPropagation();

    const {onStarClick, editing} = this.props;

    if (!editing) {
      return;
    }

    onStarClick && onStarClick(index, value, name, e);
  }

  renderStars() {
    const {name, starCount, prefixCls} = this.props;
    const {value} = this.state;

    const radioStyles = {
      display: 'none',
      position: 'absolute',
      marginLeft: -9999,
    };

    // populate stars
    const starNodes = [];

    for (let i = starCount; i > 0; i--) {
      const id = `${name}_${i}`;
      const starNodeInput = (
        <input
          key={`input_${id}`}
          style={radioStyles}
          className="dv-star-rating-input"
          type="radio"
          name={name}
          id={id}
          value={i}
          checked={value === i}
          onChange={() => this.onChange(i, name)}
        />
      );
      const starNodeLabel = (
        <label
          key={`label_${id}`}
          className={classNames(`${prefixCls}-star`, `${prefixCls}-${value >= i ? 'full' : 'empty'}-star`)}
          htmlFor={id}
          onClick={e => this.onStarClick(i, value, name, e)}
        >
          {this.renderIcon(i, value, name, id)}
        </label>
      );

      starNodes.push(starNodeInput);
      starNodes.push(starNodeLabel);
    }

    return starNodes.length ? starNodes : null;
  }

  renderIcon(index, value, name, id) {
    const {renderStarIcon, renderStarIconHalf} = this.props;

    if (typeof renderStarIconHalf === 'function' && Math.ceil(value) === index && value % 1 !== 0) {
      return renderStarIconHalf(index, value, name, id);
    }

    if (typeof renderStarIcon === 'function') {
      return renderStarIcon(index, value, name, id);
    }

    return <Icon key={`icon_${id}`} type={value >= index ? 'star' : 'star-o'} />;
  }

  render() {
    const {editing, prefixCls, className, style} = this.props;
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}-non-editable`]: !editing,
    });

    return (
      <div style={style} className={cls}>
        {this.renderStars()}
      </div>
    );
  }
}
