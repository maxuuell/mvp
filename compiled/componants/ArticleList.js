"use strict";

var ArticleList = function ArticleList(props) {
  console.log(props);
  return React.createElement(
    "div",
    { className: "articles-container" },
    props.articles.map(function (article) {
      return React.createElement(ArticleListEntry, {
        title: article.title,
        description: article.description,
        link: article.link });
    })
  );
};

window.ArticleListEntry = ArticleListEntry;