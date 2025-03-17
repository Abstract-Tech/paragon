import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import IconButton from '../IconButton';
import { STYLE_VARIANTS } from './constants';
function ChipIcon(_ref) {
  let {
    className,
    src,
    onClick,
    alt,
    variant,
    disabled
  } = _ref;
  if (onClick) {
    return /*#__PURE__*/React.createElement(IconButton, {
      className: className,
      src: src,
      onClick: onClick,
      iconAs: Icon,
      alt: alt,
      invertColors: variant === STYLE_VARIANTS.DARK,
      tabIndex: disabled ? -1 : 0
    });
  }
  return /*#__PURE__*/React.createElement(Icon, {
    src: src,
    className: className,
    size: "sm"
  });
}
ChipIcon.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  onClick: PropTypes.func,
  alt: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool
};
ChipIcon.defaultProps = {
  onClick: undefined,
  alt: undefined,
  variant: STYLE_VARIANTS.LIGHT,
  disabled: false
};
export default ChipIcon;
//# sourceMappingURL=ChipIcon.js.map