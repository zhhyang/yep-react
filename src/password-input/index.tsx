import * as React from 'react';
import classNames from 'classnames';
import {suffixPx} from '../_utils/styleUtil';

export interface PasswordInputProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  value: number | string;
  length?: number;
  mask?: boolean;
  gutter?: string | number;
  message?: React.ReactNode;
  onFocus: (name: string) => void;
}

export default class PasswordInput extends React.PureComponent<PasswordInputProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-password-input',
    style: {},
    name: 'default',
    value: '',
    length: 6,
    mask: true,
    gutter: 0,
  };

  constructor(props: PasswordInputProps) {
    super(props);
  }

  renderMessage() {
    const {prefixCls, message} = this.props;

    return <div className={`${prefixCls}-message`}>{message}</div>;
  }

  render() {
    const {prefixCls, className, value, length = 6, mask, gutter, onFocus, name} = this.props;
    const containerCls = classNames(prefixCls, className);

    const ulCls = classNames(`${prefixCls}-ul`, {[`${prefixCls}-hairline-surround`]: !gutter});

    const points = [];
    const valueArray = String(value).split('');

    for (let i = 0; i < length; i++) {
      const char = valueArray[i];
      const liCls = classNames({[`${prefixCls}-hairline-left`]: i !== 0 && !gutter}, `${prefixCls}-li`);
      let style;
      if (i !== 0 && gutter) {
        style = {marginLeft: suffixPx(gutter)};
      }

      points.push(
        <li className={liCls} style={style} key={`${prefixCls}-li-${i}`}>
          {mask ? <i style={{visibility: char ? 'visible' : 'hidden'}} /> : char}
        </li>
      );
    }

    return (
      <div className={containerCls}>
        <ul
          className={ulCls}
          onClick={(e: React.MouseEvent<HTMLDListElement>) => {
            e.stopPropagation();
            onFocus && onFocus(name as string);
          }}
        >
          {points}
        </ul>
        {this.renderMessage()}
      </div>
    );
  }
}
