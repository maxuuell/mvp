"use strict";

var ArticleList = function ArticleList(props) {
  return React.createElement(
    "div",
    { className: "container" },
    props.articles.map(function (article) {
      return React.createElement(ArticleListEntry, {
        title: article.title,
        description: article.description,
        link: article.link });
    })
  );
};

window.ArticleListEntry = ArticleListEntry;