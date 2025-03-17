import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const STYLE_VARIANTS = ['primary', 'success', 'error', 'warning'];
const Bubble = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    variant,
    className,
    children,
    disabled,
    expandable,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: classNames('pgn__bubble', `pgn__bubble-${variant}`, className, {
      disabled,
      expandable
    }),
    ...props
  }, children);
});
Bubble.propTypes = {
  /** Specifies contents of the component. */
  // @ts-ignore
  children: PropTypes.node,
  /** The `Bubble` style variant to use. */
  variant: PropTypes.oneOf(STYLE_VARIANTS),
  /** Activates disabled variant. */
  disabled: PropTypes.bool,
  /** A class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies whether to add padding to the `Bubble` or not. */
  expandable: PropTypes.bool
};
Bubble.defaultProps = {
  children: null,
  variant: 'primary',
  disabled: false,
  className: undefined,
  expandable: false
};
export default Bubble;
//# sourceMappingURL=index.js.map