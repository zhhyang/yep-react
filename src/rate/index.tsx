import * as React from 'react';
import classNames from 'classnames';
import Icon from '../icon';

export interface RateProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  value: number;
  editing?: boolean;
  starCount: number;
  onStarClick?: (index: number, value: any, name: any, e: any) => void;
  renderStarIcon?: (index: number, value: any, name: any, id: any) => React.ReactNode;
  renderStarIconHalf?: (index: number, value: any, name: any, id: any) => React.ReactNode;
}

interface State  {
  value: number,
}

export default class Rate extends React.PureComponent<RateProps, State> {
  static defaultProps = {
    prefixCls: 'Yep-rate',
    style: {},
    starCount: 5,
    editing: true,
    value:0,
  };

  constructor(props:RateProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.renderStars = this.renderStars.bind(this);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps:RateProps) {
    const {value} = nextProps;

    if (value != null && value !== this.state.value) {
      this.setState({value});
    }
  }

  onChange(inputValue:any) {
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

  onStarClick(index:number, value:any, name?:string, e?:any) {
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
    } as React.CSSProperties;

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
          onChange={() => this.onChange(i)}
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
      //@ts-ignore
      starNodes.push(starNodeInput);
      //@ts-ignore
      starNodes.push(starNodeLabel);
    }

    return starNodes.length ? starNodes : null;
  }

  renderIcon(index:number, value:any, name?:string, id?:string) {
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
