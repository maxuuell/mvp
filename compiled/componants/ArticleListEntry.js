"use strict";

var ArticleListEntry = function ArticleListEntry(props) {
  return React.createElement(
    "div",
    { className: "article-entry-container" },
    React.createElement(
      "div",
      { className: "article-title" },
      props.title
    ),
    React.createElement(
      "div",
      { className: "article-description" },
      props.description
    ),
    React.createElement(
      "a",
      { href: props.link, target: "_blank" },
      "Article Source"
    )
  );
};

window.ArticleListEntry = ArticleListEntry;