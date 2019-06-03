import * as React from 'react';
import TouchFeedback from '../touch-feedback';
import classnames from 'classnames';

export interface NumberKeyboardProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  show: boolean;
  theme?: string;
  transition?: boolean;
  zIndex?: number;
  input: (value: string) => void;
  delete: () => void;
  confirm: () => void;
}

export default class NumberKeyboard extends React.PureComponent<NumberKeyboardProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-number-keyboard',
    style: {},
    show: false,
    theme: 'default',
    transition: true,
    zIndex: 100,
    input: () => {},
    delete: () => {},
    confirm: () => {},
  };

  constructor(props: NumberKeyboardProps) {
    super(props);
  }

  onKeyboardClick = (e: React.MouseEvent<HTMLTableDataCellElement>, value: string = '') => {
    e.nativeEvent.stopImmediatePropagation();
    if (value === 'delete') {
      this.props.delete && this.props.delete();
    } else if (value === 'confirm') {
      this.props.confirm && this.props.confirm();
    } else {
      this.props.input && this.props.input(value);
    }
  };

  renderKeyboardItem = (item: string, index: number) => {
    return (
      <KeyboardItem onClick={this.onKeyboardClick} key={`item-${item}-${index}`}>
        {item}
      </KeyboardItem>
    );
  };

  renderDefault(): React.ReactNode {
    return (
      <table>
        <tbody>
          <tr>{['1', '2', '3'].map((item, i) => this.renderKeyboardItem(item, i))}</tr>
          <tr>{['4', '5', '6'].map((item, i) => this.renderKeyboardItem(item, i))}</tr>
          <tr>{['7', '8', '9'].map((item, i) => this.renderKeyboardItem(item, i))}</tr>
          <tr>
            {['.', '0'].map((item, i) => this.renderKeyboardItem(item, i))}
            <KeyboardItem className={'keyboard-delete'} onClick={this.onKeyboardClick} key={`item-delete`}>
              删除
            </KeyboardItem>
          </tr>
        </tbody>
      </table>
    );
  }

  renderCustom(): React.ReactNode {
    return (
      <table>
        <tbody>
          <tr>
            {['1', '2', '3'].map((item, i) => this.renderKeyboardItem(item, i))}
            <KeyboardItem className="keyboard-delete" rowSpan={2} onClick={this.onKeyboardClick}>
              删除
            </KeyboardItem>
          </tr>
          <tr>{['4', '5', '6'].map((item, i) => this.renderKeyboardItem(item, i))}</tr>
          <tr>
            {['7', '8', '9'].map((item, i) => this.renderKeyboardItem(item, i))}
            <KeyboardItem className="keyboard-confirm" rowSpan={2} onClick={this.onKeyboardClick}>
              确定
            </KeyboardItem>
          </tr>
          <tr>
            <KeyboardItem onClick={this.onKeyboardClick} colSpan={2} key={`item-0`}>
              0
            </KeyboardItem>
            {['.'].map((item, i) => this.renderKeyboardItem(item, i))}
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    const {prefixCls, theme, show} = this.props;
    const wrapperCls = classnames(
      {[`${prefixCls}-wrapper`]: theme === 'default'},
      {[`${prefixCls}-wrapper-custom`]: theme === 'custom'},
      {[`${prefixCls}-wrapper-hide`]: !show}
    );
    return (
      <div className={wrapperCls}>
        {theme === 'default' ? this.renderDefault() : theme === 'custom' ? this.renderCustom() : this.renderDefault()}
      </div>
    );
  }
}

export interface KeyboardItemProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick: (event: React.MouseEvent<HTMLTableDataCellElement>, value: string) => void;
}

class KeyboardItem extends React.PureComponent<KeyboardItemProps, any> {
  static defaultProps = {
    prefixCls: 'Yep-number-keyboard',
    style: {},
    onClick: () => {},
  };

  constructor(props: KeyboardItemProps) {
    super(props);
  }

  render(): React.ReactNode {
    const {prefixCls, className, onClick, children, ...resetProps} = this.props;
    const KeyboardItemCls = classnames(`${prefixCls}-item`, className);
    let value = children;
    if (className === 'keyboard-delete') {
      value = 'delete';
    } else if (className === 'keyboard-hide') {
      value = 'hide';
    } else if (className === 'keyboard-confirm') {
      value = 'confirm';
    }
    return (
      <TouchFeedback activeClassName={`${prefixCls}-item-active`}>
        <td
          className={KeyboardItemCls}
          onClick={e => {
            onClick(e, value as string);
          }}
          {...resetProps}
          data-value={children}
        >
          {children}
        </td>
      </TouchFeedback>
    );
  }
}
