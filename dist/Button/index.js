import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseButton from 'react-bootstrap/Button';
import BaseButtonGroup from 'react-bootstrap/ButtonGroup';
import BaseButtonToolbar from 'react-bootstrap/ButtonToolbar';
// @ts-ignore - we're not going to bother adding types for the deprecated button
import ButtonDeprecated from './deprecated';
import Icon from '../Icon';
const Button = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    children,
    iconAfter,
    iconBefore,
    size,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(BaseButton, {
    size: size // Bootstrap's <Button> types do not allow 'md' or 'inline', but we do.
    ,
    ...props,
    className: classNames(props.className),
    ref: ref
  }, iconBefore && /*#__PURE__*/React.createElement(Icon, {
    className: "btn-icon-before",
    size: size,
    src: iconBefore
  }), children, iconAfter && /*#__PURE__*/React.createElement(Icon, {
    className: "btn-icon-after",
    size: size,
    src: iconAfter
  }));
});
Button.propTypes = {
  /** Specifies class name to apply to the button */
  className: PropTypes.string,
  /** Disables the Button, preventing mouse events, even if the underlying component is an `<a>` element */
  disabled: PropTypes.bool,
  /** Specifies the text that is displayed within the button. */
  children: PropTypes.node.isRequired,
  /** A function that would specify what the button should do when the `onClick` event is triggered.
   * For example, the button could launch a `Modal`. The default is an empty function. */
  onClick: PropTypes.func,
  /** A function that would specify what the button should do when the `onKeyDown` event is triggered.
   * For example, this could handle using the `Escape` key to trigger the button's action.
   * The default is an empty function. */
  onKeyDown: PropTypes.func,
  /** Used to set the `type` attribute on the `button` tag.  The default type is `button`. */
  type: PropTypes.string,
  /** Specifies variant to use.
   * Can be on of the base variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `dark`,
   * `light`, `link`
   *
   * as well as one of the customized variants (= base variant prefixed with `inverse-`, `outline-`
   * or `inverse-outline-`)
   * */
  variant: PropTypes.string,
  /** An icon component to render.
  * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';` */
  iconBefore: PropTypes.elementType,
  /** An icon component to render.
  * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';` */
  iconAfter: PropTypes.elementType
  // The 'as' type casting above is required for TypeScript checking, because the 'PropTypes.elementType' type normally
  // allows strings as a value (for use cases like 'div') but we don't support that for <Icon />/iconBefore/iconAfter.
  // The React TypeScript type definitions are more specific (React.ComponentType vs React.ElementType).
};
Button.defaultProps = {
  ...Button.defaultProps,
  children: undefined,
  className: undefined,
  iconBefore: undefined,
  iconAfter: undefined,
  disabled: false
};
Button.Deprecated = ButtonDeprecated;

// We could just re-export 'ButtonGroup' and 'ButtonToolbar', but we currently
// override them to add propTypes validation at runtime, since most Paragon
// consumers aren't using TypeScript yet. We also force ButtonGroup's 'size'
// prop to accept our custom values of 'md' and 'inline' which are used in
// Paragon but not used in the base Bootstrap classes.

const ButtonGroup = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
  let {
    size,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement(BaseButtonGroup, {
    size: size,
    ...props,
    ref: ref
  });
});
ButtonGroup.propTypes = {
  /** Specifies element type for this component. */
  as: PropTypes.elementType,
  /** An ARIA role describing the button group. */
  role: PropTypes.string,
  /** Specifies the size for all Buttons in the group. */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'inline']),
  /** Display as a button toggle group. */
  toggle: PropTypes.bool,
  /** Specifies if the set of Buttons should appear vertically stacked. */
  vertical: PropTypes.bool,
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string
};
ButtonGroup.defaultProps = {
  as: 'div',
  role: 'group',
  toggle: false,
  vertical: false,
  bsPrefix: 'btn-group',
  size: 'md'
};
const ButtonToolbar = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(BaseButtonToolbar, {
  ...props,
  ref: ref
}));
ButtonToolbar.propTypes = {
  /** An ARIA role describing the button group. */
  role: PropTypes.string,
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string
};
ButtonToolbar.defaultProps = {
  role: 'toolbar',
  bsPrefix: 'btn-toolbar'
};
export default Button;
export { ButtonGroup, ButtonToolbar };
//# sourceMappingURL=index.js.map