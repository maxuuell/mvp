"use strict";

var SearchBar = function SearchBar(props) {
  return React.createElement(
    "form",
    { action: "#", onsubmit: "return sendRequest()" },
    React.createElement("input", { type: "text", name: "blah", id: "input" }),
    React.createElement("input", { type: "button", value: "Push Me!", id: "button" })
  );
};
window.SearchBar = SearchBar;