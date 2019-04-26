import * as React from 'react';
import classNames from 'classnames';

export interface PriceProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 价格
   */
  value: string;
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
  decLength?: number;
  /**
   * 小数部分展示的位置，sub：右下，sup：右上，normal：正常，默认为右下。
   */
  decPos?: string;
  /**
   * 删除状态，del：删除状态，默认为不删除即''
   */
  status?: string;
  /**
   * 符号额外样式
   */
  symClassName?: '';
  /**
   * 价格整数部分额外样式
   */
  intClassName?: '';
  /**
   * 价格小数部分额外样式
   */
  decClassName?: '';
}

const dealPrice = (value: string, decLength=2,symbol='¥') => {
  // 判断value的第一位是否是货币符号
  if (!/^[0-9]*$/.test(value.substring(0, 1))) {
    symbol = value.substring(0, 1); // 如果是货币符号，获取符号
    value = value.substring(1); // 获取价格
  }

  // 判断需要展示几位小数
  value = parseFloat(value).toFixed(decLength);

  const values = (value + '').split('.');

  return {
    symbol: symbol,
    intVal: values[0],
    decimalVal: values[1],
  };
};


export default class Price extends React.PureComponent<PriceProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-price',
    style: {},
    symbol: '¥',
    symPos: 'sub',
    decLength: 2,
    decPos: 'sub',
    value: '36.00',
  };

  constructor(props: PriceProps) {
    super(props);
  }

  render() {
    let {prefixCls, symPos, decPos, status, className, symClassName, intClassName, decClassName, value, decLength, symbol} = this.props;

    const cls = classNames({
      'sym-sub': symPos === 'sub',
      'sym-sup': symPos === 'sup',
    });

    const decCls = classNames({
      'dec-sub': decPos === 'sub',
      'dec-sup': decPos === 'sup',
    });

    const delCls = classNames({
      'del': status === 'del',
    });

    symbol = dealPrice(value, decLength,symbol).symbol;
    const intVal = dealPrice(value, decLength,symbol).intVal;
    const decimalVal = dealPrice(value, decLength,symbol).decimalVal;

    return (
      <div className={`${prefixCls} ${delCls} ${className ? `${className}` : ''}`}>
        <span className={`${prefixCls}-sym ${cls} ${symClassName ? `${symClassName}` : ''}`}>{symbol}</span>
        <span className={`${prefixCls}-txt int-txt ${intClassName ? `${intClassName}` : ''}`}>{intVal}</span>
        {
          !!decimalVal &&
          <span
            className={`${prefixCls}-txt dec-txt ${decCls} ${decClassName ? `${decClassName}` : ''}`}>.{decimalVal}</span>
        }
      </div>
    );
  }
}
