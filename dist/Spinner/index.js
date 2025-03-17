import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseSpinner from 'react-bootstrap/Spinner';
const Spinner = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    className,
    screenReaderText,
    ...attrs
  } = _ref;
  const spinnerProps = {
    ...attrs,
    className: classNames('pgn__spinner', className),
    role: screenReaderText ? 'status' : undefined
  };
  return /*#__PURE__*/React.createElement(BaseSpinner, {
    ...spinnerProps,
    ref: ref
  }, screenReaderText && /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, screenReaderText));
});
Spinner.propTypes = {
  /** Specifies the class name for the component. */
  className: PropTypes.string,
  /** Specifies the screen reader content for a11y. */
  screenReaderText: PropTypes.node
};
Spinner.defaultProps = {
  className: undefined,
  screenReaderText: undefined
};
export default Spinner;
//# sourceMappingURL=index.js.map