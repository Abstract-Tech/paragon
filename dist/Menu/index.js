import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useArrowKeyNavigation from '../hooks/useArrowKeyNavigationHook';
function Menu(_ref) {
  let {
    as,
    arrowKeyNavigationSelector,
    children,
    ...props
  } = _ref;
  const parentRef = useArrowKeyNavigation({
    selectors: arrowKeyNavigationSelector
  });
  const className = classNames(props.className, 'pgn__menu');
  return /*#__PURE__*/React.createElement(as, {
    ...props,
    ref: parentRef,
    className
  },
  /*#__PURE__*/
  // eslint-disable-next-line react/jsx-no-useless-fragment
  React.createElement(React.Fragment, null, children));
}
Menu.propTypes = {
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
   */
  arrowKeyNavigationSelector: PropTypes.string,
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Specifies the content of the menu */
  children: PropTypes.node
};
Menu.defaultProps = {
  className: undefined,
  arrowKeyNavigationSelector: 'a:not(:disabled),button:not(:disabled),input:not(:disabled)',
  as: 'div',
  children: null
};
export default Menu;
//# sourceMappingURL=index.js.map