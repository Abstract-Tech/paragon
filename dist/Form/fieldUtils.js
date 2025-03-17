import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { newId } from '../utils';
const omitUndefinedProperties = function () {
  let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.entries(obj).reduce((acc, _ref) => {
    let [key, value] = _ref;
    if (value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {});
};
const callAllHandlers = function () {
  for (var _len = arguments.length, handlers = new Array(_len), _key = 0; _key < _len; _key++) {
    handlers[_key] = arguments[_key];
  }
  const unifiedEventHandler = event => {
    handlers.filter(handler => typeof handler === 'function').forEach(handler => handler(event));
  };
  return unifiedEventHandler;
};
const useHasValue = _ref2 => {
  let {
    defaultValue,
    value
  } = _ref2;
  const [hasUncontrolledValue, setHasUncontrolledValue] = useState(!!defaultValue || defaultValue === 0);
  const hasValue = !!value || value === 0 || hasUncontrolledValue;
  const handleInputEvent = e => setHasUncontrolledValue(!!e.target.value);
  return [hasValue, handleInputEvent];
};
const useIdList = (uniqueIdPrefix, initialList) => {
  const [idList, setIdList] = useState(initialList || []);
  const addId = idToAdd => {
    setIdList(oldIdList => [...oldIdList, idToAdd]);
    return idToAdd;
  };
  const getNewId = () => {
    const idToAdd = newId(`${uniqueIdPrefix}-`);
    return addId(idToAdd);
  };
  const removeId = idToRemove => {
    setIdList(oldIdList => oldIdList.filter(id => id !== idToRemove));
  };
  const useRegisteredId = explicitlyRegisteredId => {
    const [registeredId, setRegisteredId] = useState(explicitlyRegisteredId);
    useEffect(() => {
      if (explicitlyRegisteredId) {
        addId(explicitlyRegisteredId);
      } else if (!registeredId) {
        setRegisteredId(getNewId());
      }
      return () => removeId(registeredId);
    }, [registeredId, explicitlyRegisteredId]);
    return registeredId;
  };
  return [idList, useRegisteredId];
};
const mergeAttributeValues = function () {
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }
  const mergedValues = classNames(values);
  return mergedValues || undefined;
};
export { callAllHandlers, useHasValue, mergeAttributeValues, useIdList, omitUndefinedProperties };
//# sourceMappingURL=fieldUtils.js.map