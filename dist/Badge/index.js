import React from 'react';
import PropTypes from 'prop-types';
import BaseBadge from 'react-bootstrap/Badge';
const Badge = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(BaseBadge, {
  ...props,
  ref: ref
}));
const STYLE_VARIANTS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
Badge.propTypes = {
  /** Specifies element type for this component */
  as: PropTypes.elementType,
  /** Visual style of the badge */
  variant: PropTypes.oneOf(STYLE_VARIANTS),
  /** Add the `pill` modifier to make badges more rounded with some additional horizontal padding */
  pill: PropTypes.bool,
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string
};
Badge.defaultProps = {
  as: 'span',
  variant: 'primary',
  pill: false,
  bsPrefix: 'badge'
};
export default Badge;
//# sourceMappingURL=index.js.map