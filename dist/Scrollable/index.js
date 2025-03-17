import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useIsVisible from '../hooks/useIsVisibleHook';
export const CLASSNAME_SCROLL_TOP = 'pgn__scrollable-body-scroll-top';
export const CLASSNAME_SCROLL_BOTTOM = 'pgn__scrollable-body-scroll-bottom';
function Scrollable(_ref) {
  let {
    children,
    ...props
  } = _ref;
  const [isScrolledToTop, topSentinelRef] = useIsVisible();
  const [isScrolledToBottom, bottomSentinelRef] = useIsVisible();
  const [valueNow, setValueNow] = useState(0);
  const className = classNames('pgn__scrollable-body', props.className, {
    [CLASSNAME_SCROLL_TOP]: isScrolledToTop,
    [CLASSNAME_SCROLL_BOTTOM]: isScrolledToBottom
  });
  const handleScroll = e => {
    const maxScrollHeight = e.currentTarget.scrollHeight - e.currentTarget.clientHeight;
    setValueNow(Math.ceil(100 * e.currentTarget.scrollTop / maxScrollHeight));
  };
  return /*#__PURE__*/React.createElement("div", {
    ...props,
    className: className,
    role: "scrollbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": valueNow,
    "aria-controls": "scrollbar",
    tabIndex: "0",
    onScroll: handleScroll
  }, /*#__PURE__*/React.createElement("div", {
    ref: topSentinelRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "pgn__scrollable-body-content"
  }, children), /*#__PURE__*/React.createElement("div", {
    ref: bottomSentinelRef
  }));
}
Scrollable.propTypes = {
  /** Specifies the content of the `Scrollable`. */
  children: PropTypes.node.isRequired,
  /** Additional classnames for this component. */
  className: PropTypes.string
};
Scrollable.defaultProps = {
  className: undefined
};
export default Scrollable;
//# sourceMappingURL=index.js.map