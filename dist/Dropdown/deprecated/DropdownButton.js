import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// eslint-disable-next-line import/no-cycle
import { Consumer } from './index';
function DropdownButton(_ref) {
  let {
    children,
    className,
    ...other
  } = _ref;
  return /*#__PURE__*/React.createElement(Consumer, null, _ref2 => {
    let {
      buttonRef,
      isOpen,
      toggle,
      triggerId
    } = _ref2;
    return /*#__PURE__*/React.createElement("button", {
      ...other,
      id: classNames(triggerId, other.id),
      "aria-expanded": isOpen,
      "aria-haspopup": true,
      type: "button",
      ref: buttonRef,
      className: classNames('dropdown-toggle', 'btn', className),
      onClick: e => {
        toggle(e);
        if (other.onClick) {
          other.onClick(e);
        }
      }
    }, children);
  });
}
DropdownButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
DropdownButton.defaultProps = {
  children: undefined,
  className: 'btn-light'
};
export default DropdownButton;
//# sourceMappingURL=DropdownButton.js.map