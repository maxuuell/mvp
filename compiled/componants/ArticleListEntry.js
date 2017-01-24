"use strict";

var ArticleListEntry = function ArticleListEntry(props) {
  return React.createElement(
    "div",
    { className: "article-entry-container" },
    React.createElement(
      "div",
      { className: "article-title" },
      props[0]
    ),
    React.createElement(
      "div",
      { className: "article-description" },
      props[1]
    ),
    React.createElement(
      "a",
      { href: "{props[2]", target: "_blank" },
      "Article Source"
    )
  );
};

window.ArticleListEntry = ArticleListEntry;