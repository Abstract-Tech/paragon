import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import Avatar from '../Avatar';
const buttonSizesToAvatarSize = {
  sm: 'xs',
  md: 'sm',
  lg: 'md'
};
const AvatarButton = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    children,
    className,
    showLabel,
    size,
    src,
    ...attrs
  } = _ref;
  const avatarSize = buttonSizesToAvatarSize[size] || 'sm';
  return /*#__PURE__*/React.createElement(Button, {
    ...attrs,
    className: classNames('btn-avatar',
    // the public class name for custom styling
    'pgn__avatar-button-avatar', `pgn__avatar-button-avatar-${size}`, className, {
      'pgn__avatar-button-hide-label': !showLabel
    }),
    size: size,
    ref: ref
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: src,
    alt: showLabel ? '' : children,
    size: avatarSize
  }), showLabel && children);
});
AvatarButton.propTypes = {
  /** The button text */
  children: PropTypes.string,
  /** A class name to append to the button */
  className: PropTypes.string,
  /** Show the label or only the avatar */
  showLabel: PropTypes.bool,
  /** The button size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Image src of the avatar image */
  src: PropTypes.string,
  /** The button style variant to use */
  variant: PropTypes.string
};
AvatarButton.defaultProps = {
  children: undefined,
  className: undefined,
  showLabel: true,
  size: 'md',
  src: undefined,
  variant: 'tertiary'
};
export default AvatarButton;
//# sourceMappingURL=index.js.map