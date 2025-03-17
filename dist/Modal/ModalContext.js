import React, { useMemo } from 'react';
const ModalContext = /*#__PURE__*/React.createContext({
  onClose: () => {},
  isOpen: false,
  isBlocking: false
});
function ModalContextProvider(_ref) {
  let {
    onClose,
    isOpen,
    isBlocking = false,
    children = null
  } = _ref;
  const modalContextValue = useMemo(() => ({
    onClose,
    isOpen,
    isBlocking
  }), [onClose, isOpen, isBlocking]);
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: modalContextValue
  }, children);
}
export { ModalContextProvider };
export default ModalContext;
//# sourceMappingURL=ModalContext.js.map