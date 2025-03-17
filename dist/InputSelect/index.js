import React from 'react';
import PropTypes from 'prop-types';
import asInput from '../asInput';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';
class Select extends React.Component {
  static getOption(option, i) {
    const {
      disabled
    } = option;
    let {
      label,
      value
    } = option;
    if (typeof option === 'string') {
      label = option;
      value = option;
    }
    return /*#__PURE__*/React.createElement("option", {
      key: `option-${i}`,
      value: value,
      disabled: disabled
    }, label);
  }
  getOptions() {
    return this.props.options.map((option, i) => {
      let section;
      if (option.options) {
        const groupOpts = option.options.map((opt, j) => Select.getOption(opt, j));
        section = /*#__PURE__*/React.createElement("optgroup", {
          label: option.label,
          key: option.label
        }, groupOpts);
      } else {
        section = Select.getOption(option, i);
      }
      return section;
    });
  }
  render() {
    const {
      className,
      inputRef,
      ...others
    } = this.props;
    const options = this.getOptions();
    return /*#__PURE__*/React.createElement("select", {
      ...others,
      className: className,
      type: "select",
      ref: inputRef
    }, options);
  }
}
Select.propTypes = {
  className: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(PropTypes.element)
  })]),
  options: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.shape({}))]).isRequired
};
Select.defaultProps = {
  className: undefined,
  inputRef: undefined
};
const InputSelect = asInput(withDeprecatedProps(Select, 'InputSelect', {
  className: {
    deprType: DeprTypes.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => Array.isArray(value) ? value.join(' ') : value,
    message: 'It should be a string.'
  }
}));
export default InputSelect;
//# sourceMappingURL=index.js.map