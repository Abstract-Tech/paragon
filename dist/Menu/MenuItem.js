import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
function MenuItem(_ref) {
  let {
    as,
    children,
    defaultSelected,
    iconAfter,
    iconBefore,
    ...props
  } = _ref;
  const className = classNames(props.className, 'pgn__menu-item');
  return /*#__PURE__*/React.createElement(as, {
    ...props,
    className
  }, /*#__PURE__*/React.createElement(React.Fragment, null, iconBefore && /*#__PURE__*/React.createElement(Icon, {
    className: "btn-icon-before",
    src: iconBefore
  }), /*#__PURE__*/React.createElement("span", {
    className: "pgn__menu-item-text"
  }, children), /*#__PURE__*/React.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), iconAfter && /*#__PURE__*/React.createElement(Icon, {
    className: "btn-icon-after",
    src: iconAfter
  })));
}
MenuItem.propTypes = {
  /** Specifies that this ``MenuItem`` is selected inside the ``SelectMenu`` */
  defaultSelected: PropTypes.bool,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /** Specifies the content of the ``MenuItem`` */
  children: PropTypes.node,
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Specifies the jsx before the content of the ``MenuItem`` */
  iconBefore: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
  /** Specifies the jsx after the content of the ``MenuItem`` */
  iconAfter: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
};
MenuItem.defaultProps = {
  defaultSelected: false,
  as: 'button',
  className: undefined,
  children: null,
  iconBefore: undefined,
  iconAfter: undefined
};
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map