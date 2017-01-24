"use strict";

var ArticleList = function ArticleList(props) {
  return React.createElement(
    "div",
    { className: "articles-container" },
    React.createElement(ArticleListEntry, {
      title: props[0],
      article: props[1],
      link: props[2] })
  );
};

window.ArticleListEntry = ArticleListEntry;