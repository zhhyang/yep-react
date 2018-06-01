

import React from 'react'
import classnames from 'classnames'

const DropdownToggle = props => {
  const { className, children, open, ...other } = props
  return (
    <div className={classnames('Yep-dropdown-toggle', {
      'Yep-dropdown-toggle--open': open
    }, className)} {...other}>
      {children}
    </div>
  )
}

export default DropdownToggle
