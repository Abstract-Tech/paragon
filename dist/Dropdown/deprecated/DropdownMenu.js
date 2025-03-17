import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// eslint-disable-next-line import/no-cycle
import { Consumer } from './index';
function DropdownMenu(_ref) {
  let {
    children,
    ...other
  } = _ref;
  return /*#__PURE__*/React.createElement(Consumer, null, _ref2 => {
    let {
      handleMenuKeyDown,
      isOpen,
      menuRef,
      triggerId
    } = _ref2;
    return /*#__PURE__*/ /* eslint-disable-next-line jsx-a11y/interactive-supports-focus */React.createElement("div", {
      ...other,
      "aria-labelledby": triggerId,
      "aria-hidden": !isOpen,
      ref: menuRef,
      role: "menu",
      className: classNames('dropdown-menu', {
        show: isOpen
      }, other.className),
      onKeyDown: e => {
        handleMenuKeyDown(e);
        if (other.onKeyDown) {
          other.onKeyDown(e);
        }
      }
    }, children);
  });
}
DropdownMenu.propTypes = {
  children: PropTypes.node
};
DropdownMenu.defaultProps = {
  children: undefined
};
export default DropdownMenu;
//# sourceMappingURL=DropdownMenu.js.map