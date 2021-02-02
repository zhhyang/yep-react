import * as React from 'react';
import classNames from 'classnames';

export interface ButtonGroupProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = ({prefixCls, className, style, children}) => {
  const cls = classNames(prefixCls, className);

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

ButtonGroup.defaultProps = {
  prefixCls: 'Yep-jd-btns',
} as Partial<ButtonGroupProps>;

export default ButtonGroup;
