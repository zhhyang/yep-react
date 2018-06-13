import PropTypes from 'prop-types';

const DropdownMenu = () => null;

DropdownMenu.defaultProps = {
  direction: 'down',
  align: 'left',
};

DropdownMenu.propTypes = {
  // 展开方向，默认 `down`，如果实际空间不足，则可能自适应改变方向
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),

  // 对齐方式，默认 `left`
  align: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'middle']),

  // 是否右对齐，建议用 `align="right"` 代替
  right: PropTypes.bool,
};

export default DropdownMenu;
