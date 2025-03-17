/* eslint-disable react/require-default-props */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import RBContainer from 'react-bootstrap/Container';
var ContainerSizeClass = /*#__PURE__*/function (ContainerSizeClass) {
  ContainerSizeClass["xs"] = "container-mw-xs";
  ContainerSizeClass["sm"] = "container-mw-sm";
  ContainerSizeClass["md"] = "container-mw-md";
  ContainerSizeClass["lg"] = "container-mw-lg";
  ContainerSizeClass["xl"] = "container-mw-xl";
  return ContainerSizeClass;
}(ContainerSizeClass || {});
const Container = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    size,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(RBContainer, {
    ...props,
    ref: ref,
    className: classNames(props.className, size && ContainerSizeClass[size])
  }, children);
});
Container.propTypes = {
  ...RBContainer.propTypes,
  /** Override the base element */
  as: PropTypes.elementType,
  /** Specifies the contents of the container */
  children: PropTypes.node,
  /** Fill all available space at any breakpoint */
  fluid: PropTypes.bool,
  /** Set the maximum width for the container. Omiting the prop will remove the max-width */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string
};
Container.defaultProps = {
  as: 'div',
  children: undefined,
  fluid: true,
  size: undefined,
  bsPrefix: 'container'
};
export default Container;
//# sourceMappingURL=index.js.map