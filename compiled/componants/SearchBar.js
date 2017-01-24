"use strict";

var SearchBar = function SearchBar(_ref) {
  var handleSubmit = _ref.handleSubmit,
      handleChange = _ref.handleChange,
      value = _ref.value;

  return React.createElement(
    "form",
    { onSubmit: function onSubmit(e) {
        return handleSubmit(e);
      } },
    React.createElement("input", { type: "text", value: value, onChange: function onChange(e) {
        return handleChange(e.target.value);
      } }),
    React.createElement("input", { type: "submit", value: "Submit" })
  );
};

window.SearchBar = SearchBar;