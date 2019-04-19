import * as React from 'react';
import classNames from 'classnames';

export interface PriceProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  /**
   * 金币符号，默认为人民币符号¥。
   */
  symbol?: string;
  /**
   * 金币符号位置，sub：左下，sup：左上，normal：正常，默认为左下，不传即为默认。
   */
  symPos?: string;
  /**
   * 小数部分展示的位数，0：不展示，1：展示1位，2：展示2位，默认展示2位。
   */
  decimalNum?: number;
  /**
   * 小数部分展示的位置，sub：右下，sup：右下，normal：正常，默认为右下。
   */
  decPos?: string;
}

export default class Price extends React.PureComponent<PriceProps, any> {

  static defaultProps = {
    prefixCls: 'Yep-price',
    style: {},
    symbol: '¥',
    symPos: 'sub',
    decimalNum: 2,
    decPos: 'sub',
    value:'',
  };

  constructor(props: PriceProps) {
    super(props);
    this.state = {
      value:''
    }
  }

  componentDidMount() {
    let {value, decimalNum,symbol} = this.props;

    // 判断value的第一位是否是货币符号
    if (!/^[0-9]*$/.test(value.substring(0, 1))) {
      symbol = value.substring(0, 1); // 如果是货币符号，获取符号
      value = value.substring(1);
    }

    // 判断需要展示几位小数
    if (decimalNum === 0) {
      value = parseInt(value);
    } else {
      value = parseFloat(value).toFixed(decimalNum);
    }
    console.log(value,'value')
    let values = (value+'').split('.');
    this.setState({
      symbol:symbol,
      intVal:values[0],
      decimalVal:values[1],
    })
  }

  render() {
    const {symbol,intVal,decimalVal} = this.state;
    const {prefixCls,symPos} = this.props;
    const cls = classNames({
      'sym-sub':symPos==='sub',
      'sym-sup':symPos==='sup',

    })
    return (
      <div>
        <span className={`${cls} ${prefixCls}-sym`}>{symbol}</span>
        <span className={`${prefixCls}-txt int-txt`}>{intVal}</span>
        <span className={`${prefixCls}-txt dec-txt`}>.{decimalVal}</span>
      </div>
    );
  }
}
