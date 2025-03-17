import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormGroupContext } from './FormGroupContext';
import { FORM_CONTROL_SIZES } from './constants';
function FormLabel(_ref) {
  let {
    children,
    isInline = false,
    ...props
  } = _ref;
  const {
    size,
    isControlGroup,
    getLabelProps
  } = useFormGroupContext();
  const className = classNames('pgn__form-label', {
    'pgn__form-label-inline': isInline,
    'pgn__form-label-lg': size === FORM_CONTROL_SIZES.LARGE,
    'pgn__form-label-sm': size === FORM_CONTROL_SIZES.SMALL
  }, props.className);
  const labelProps = getLabelProps({
    ...props,
    className
  });
  const componentType = isControlGroup ? 'p' : 'label';
  return /*#__PURE__*/React.createElement(componentType, labelProps, children);
}
FormLabel.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: PropTypes.bool
};
export default FormLabel;
//# sourceMappingURL=FormLabel.js.map