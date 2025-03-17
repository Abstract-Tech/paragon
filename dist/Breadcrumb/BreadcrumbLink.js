import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export default function BreadcrumbLink(_ref) {
  let {
    as,
    clickHandler,
    linkProps
  } = _ref;
  const {
    label,
    url,
    className,
    ...props
  } = linkProps;
  const addtlProps = {};
  if (as === 'a' && url) {
    // eslint-disable-next-line no-console
    console.warn('[Deprecated]: using "url" parameter to specify link\'s destination in Breadcrumb component is ' + 'deprecated. Please use "href" instead when rendering links as anchor tag.');
    addtlProps.href = url;
  }
  if (clickHandler) {
    addtlProps.onClick = clickHandler;
  }
  return /*#__PURE__*/React.createElement(as, {
    ...props,
    ...addtlProps,
    className: classNames('link-muted', className)
  }, label);
}
BreadcrumbLink.propTypes = {
  as: PropTypes.elementType.isRequired,
  clickHandler: PropTypes.func,
  linkProps: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string,
    className: PropTypes.string
  }).isRequired
};
BreadcrumbLink.defaultProps = {
  clickHandler: undefined
};
//# sourceMappingURL=BreadcrumbLink.js.map