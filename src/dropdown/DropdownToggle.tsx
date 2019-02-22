import * as React from 'react';
import classNames from 'classnames';
export interface DropdownToggleProps {
  className?:string;
  open?:boolean;
  children:React.ReactNode;
}
const DropdownToggle:React.FunctionComponent<DropdownToggleProps> = props => {
  const {className, children, open, ...other} = props;
  return (
    <div
      className={classNames(
        'Yep-dropdown-toggle',
        {
          'Yep-dropdown-toggle--open': open,
        },
        className
      )}
      {...other}
    >
      {children}
    </div>
  );
};

export default DropdownToggle;
