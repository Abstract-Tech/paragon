let lastId = 0;
const newId = function () {
  let prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';
  lastId += 1;
  return `${prefix}${lastId}`;
};
export default newId;
//# sourceMappingURL=newId.js.map