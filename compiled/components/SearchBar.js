"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SearchBar = exports.SearchBar = function SearchBar(_ref) {
  var handleSubmit = _ref.handleSubmit,
      handleChange = _ref.handleChange,
      value = _ref.value;

  return React.createElement(
    "form",
    { className: "col s12", onSubmit: function onSubmit(e) {
        return handleSubmit(e);
      } },
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "input-field col s12" },
        React.createElement("input", { type: "text", placeholder: "example: Star Wars", value: value, onChange: function onChange(e) {
            return handleChange(e.target.value);
          } }),
        React.createElement(
          "button",
          { className: "btn waves-effect waves-light", type: "submit", name: "action" },
          "Submit",
          React.createElement(
            "i",
            { className: "material-icons right" },
            "send"
          )
        )
      )
    )
  );
};