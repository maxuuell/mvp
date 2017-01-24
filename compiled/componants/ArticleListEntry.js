"use strict";

var ArticleListEntry = function ArticleListEntry(props) {
  console.log(props);

  return React.createElement(
    "div",
    { className: "article-entry-container" },
    React.createElement(
      "div",
      { className: "article-title" },
      props.article.title
    ),
    React.createElement(
      "div",
      { className: "article-description" },
      props.article.descriptiong
    ),
    React.createElement(
      "a",
      { href: props.article.link, target: "_blank" },
      "Article Source"
    )
  );
};

window.ArticleListEntry = ArticleListEntry;